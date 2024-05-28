import { Request, Response } from 'express';
import User, { IUser } from '../Models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../Config/SecretJWT';
import exp from 'constants';

class AuthController {

    async login(req: Request, res: Response) {
        const { user_Email, Password } = req.body;

        const user = await User.findOne({ user_Email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const validPassword = await bcrypt.compare(Password, user.Password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ _id: user._id }, JWT_SECRET , { expiresIn: '10h' });

        res.json({ token, user: { user_Email: user.user_Email, user_Name: user.user_Name }});
        res.set('Authorization', `Bearer ${token}`).json({ user: { user_Email: user.user_Email, user_Name: user.user_Name }});
    }
}

export default AuthController;