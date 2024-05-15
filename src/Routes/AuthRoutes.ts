import express from 'express';

import UserController from '../Controllers/UserController';
import AuthController from '../Controllers/AuthController';

const router = express.Router();
const userController = new UserController();
const authController = new AuthController();

router.post('/user', userController.createUser);
router.post('/login', authController.login);

export default router;