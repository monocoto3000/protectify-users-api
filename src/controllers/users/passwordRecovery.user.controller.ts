import { Request, Response } from 'express';
import { User } from '../../models/user.model';
//import updateUserService from '../../services/users/update.user.service';
import getUserByEmailService from '../../services/users/getByEmail.user.service';
import updatePasswordService from '../../services/users/updatePassword.user.service';
import { transporter } from '../../config/mailer';

export const RecoveryPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email} = req.body;
        const user: User | null = await getUserByEmailService(email);
        if (!user) {
            res.status(404).json({ message: 'Email no valid' });
            return;
        }
        const newPassword = generateRandomPassword();

        await updatePasswordService({ email, password: newPassword });
        const info = await transporter.sendMail({
            from: '"Forgot password 👻" <protectify@gmail.com>', 
            to: email, 
            subject: "Forgot password",
            html: `<b>Tu contraseña fue restablecida, aqui tienes tu nueva contraseña para ingresar a tu cuenta: ${newPassword}</b>`, // html body
        })

        res.status(200).json({ message: 'password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8);
}