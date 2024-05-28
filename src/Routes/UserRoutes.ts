import express from 'express';
import Autentification from '../Middlewares/Autentification';
import AuthMiddlewares from '../Middlewares/AuthMiddlewares';

import UserController from '../Controllers/UserController';

const router = express.Router();
const userController = new UserController();
router.use(Autentification);


router.get('/user', AuthMiddlewares, userController.getUsers);
router.get('/user/:id', AuthMiddlewares, userController.getUser);
router.put('/user/:id', AuthMiddlewares, userController.updateUser);
router.delete('/user/:id', AuthMiddlewares, userController.deleteUser);

export default router;
