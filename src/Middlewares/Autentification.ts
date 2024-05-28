import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../Config/SecretJWT';

async function Autentification(req: Request, res: Response, next: Function) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Access Denied For Autenfication' });
    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.body.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
}

export default Autentification;