import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../Config/SecretJWT';
import User, { IUser } from '../Models/User';
import { Console } from 'console';

async function AuthMiddlewares(req: Request, res: Response, next: Function) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Access Denied For Auth' });
    try{

        const decoded = jwt.verify(token, JWT_SECRET) as { _id: string };
        const user = await User.findById(decoded._id);
        if(user){
            req.body.user = user;
            next();
        }else{
            res.status(400).json({ message: 'User Dont Match' });
        }

    }catch(error){
        res.status(400).json({ message: 'Invalid Token' });
    }
}

export default AuthMiddlewares;