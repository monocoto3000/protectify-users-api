import { Request, Response } from 'express';
import getAllRoomsService from '../../services/rooms/getAll.room.service';

export const getAllRooms = async (req: Request, res: Response): Promise<void> => {
    try {
        const created_by = parseInt(req.params.id, 10);
        const rooms = await getAllRoomsService(created_by);
        if (rooms) {
            res.status(200).json(rooms);
        } else {
            res.status(404).json({ message: 'Rooms not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error getting rooms', error });
    }
};