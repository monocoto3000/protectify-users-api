import { User } from '../../models/user.model';
import bcrypt from 'bcrypt';
import connection from '../../config/db';
import { isEmailTaken } from '../../utils/email.util';
import isPasswordValid from '../../utils/password.util';

const updatePasswordService = async (user:any): Promise<void> => {
    const { email, password } = user;
    if (await isPasswordValid(password)) {
        throw new Error('Password must be 8 characters long')
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    await (await connection).execute('UPDATE users SET password = ? WHERE email = ?', [hashedPassword,email]);
};

export default updatePasswordService; 