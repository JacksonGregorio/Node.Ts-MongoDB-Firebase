import express from 'express';

import UserController from '../Controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;
