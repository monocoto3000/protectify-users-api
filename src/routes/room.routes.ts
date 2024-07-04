import { Router } from 'express';
import { createRoom } from '../controllers/rooms/create.room.controller';
import { getAllRooms } from '../controllers/rooms/getAll.room.controller';
import { authMiddleware } from '../middlewares/middleware';

const router = Router();

router.use(authMiddleware);
router.post('/createRoom', createRoom)
router.get('/getAllRooms/:id', getAllRooms)

export default router;
