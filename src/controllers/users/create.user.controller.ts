import { Request, Response } from 'express';
import createUserService from '../../services/users/create.user.service';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await createUserService(req.body);
    res.status(201).json({ message: 'User created succesfully' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};