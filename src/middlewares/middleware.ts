import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

export const authMiddleware = (req: Request & { user?: User }, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'Acceso denegado' });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as User;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token invalido' });
  }
};
    