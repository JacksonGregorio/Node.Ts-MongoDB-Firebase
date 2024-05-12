import { Request, Response } from 'express';
import User, { IUser } from '../Models/User';

class UserController {
    
    async createUser(req: Request, res: Response) {
        const newUser: IUser = new User(req.body);
        const { user_Email, user_Name, user_NickName, user_cpf, Password } = req.body;
    
        if(!user_Email || !user_Name || !user_NickName || !user_cpf || !Password) {
            return res.status(422).json({message: "Todos os campos são necessários"});
        }
    
        await newUser.save();
        res.status(201).json(newUser);
    }
    
    async getUsers(req: Request, res: Response) {
        const users = await User.find();
        res.json(users);
    }
    
    async getUser(req: Request, res: Response) {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    }
    
    async updateUser(req: Request, res: Response) {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).send('User not found');
        }
    }
    
    async deleteUser(req: Request, res: Response) {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).send('User not found');
        }
    }
    
}

export default UserController;