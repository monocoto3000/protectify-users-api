import { Request, Response } from 'express';
import getUserByIdService from '../../services/users/getById.user.service';

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.id, 10);
        const user = await getUserByIdService(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error getting user', error });
    }
};