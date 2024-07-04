import { Request, Response } from 'express';
import getAllUsersService from '../../services/users/getAll.user.service';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsersService();
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'Users not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error getting users', error });
    }
};