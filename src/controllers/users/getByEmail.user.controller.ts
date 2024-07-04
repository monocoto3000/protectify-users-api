import { Request, Response } from 'express';
import getUserByEmailService from '../../services/users/getByEmail.user.service';

export const getByEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    await getUserByEmailService(req.body);
    res.status(201).json({ message: 'User obtained succesfully' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};