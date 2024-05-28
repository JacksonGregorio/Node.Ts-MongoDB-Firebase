import express from 'express';
import Autentification from '../Middlewares/Autentification';

import UserController from '../Controllers/UserController';

const router = express.Router();
const userController = new UserController();
router.use(Autentification);


router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;
