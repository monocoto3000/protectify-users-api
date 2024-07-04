import { Router } from 'express';

import { createUser } from '../controllers/users/create.user.controller';
import { login } from '../controllers/users/login.controller';
import { updateUser } from '../controllers/users/update.user.controller';
import { deleteUser } from '../controllers/users/delete.user.controller';
import { getUserById } from '../controllers/users/getById.user.controller';
import { getAllUsers } from '../controllers/users/getAll.user.controller';

import { authMiddleware } from '../middlewares/middleware';

const router = Router();

router.post('/login', login);
router.post('/createUser', createUser);
router.get('/getAllUsers', authMiddleware, getAllUsers)
router.patch('/updateUser/:id', authMiddleware, updateUser)
router.delete('/deleteUser/:id', authMiddleware, deleteUser)
router.get('/getById/:id', authMiddleware, getUserById)

export default router;
