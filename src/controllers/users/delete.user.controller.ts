import { Request, Response } from 'express';
import deleteUserService from '../../services/users/delete.user.service';

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.id, 10);
        await deleteUserService(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};