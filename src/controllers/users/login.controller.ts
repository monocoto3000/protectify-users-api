import { Request, Response } from 'express';
import loginService from '../../services/users/login.service';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.status(200).json({ token });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};
