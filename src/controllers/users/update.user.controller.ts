import { Request, Response } from 'express';
import { User } from '../../models/user.model';
import updateUserService from '../../services/users/update.user.service';

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.id, 10);
        const user: User = req.body;
        await updateUserService(user, userId);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};