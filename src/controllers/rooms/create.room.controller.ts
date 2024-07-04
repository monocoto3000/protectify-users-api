import { Request, Response } from 'express';
import createRoomService from '../../services/rooms/create.room.service';

export const createRoom = async (req: Request, res: Response): Promise<void> => {
    try {
      await createRoomService(req.body);
      res.status(201).json({ message: 'Room created succesfully' });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };