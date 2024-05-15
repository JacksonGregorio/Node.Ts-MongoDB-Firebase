import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    password: string;
    password_token: string;
    password_refresh: Date;
    user_Type: number;
    user_NickName: string;
    user_Name: string;
    user_Email: string;
    user_State: boolean;
    user_cpf: string;
    user_Tel1: string;
    user_Tel2: string;
    Password: string;
    Password_Token: string;
}

const UserSchema: Schema = new Schema({
    user_Type: {type: Number,},
    user_NickName: {type: String, unique: true},
    user_Name: {type: String,},
    user_Email: {type: String, unique: true},
    user_State: {type: Boolean,},
    user_cpf: {type: String,unique: true},
    user_Tel1: {type: String, required: false},
    user_Tel2: {type :String, required: false},
    Password: {type: String},
    Password_Token: {type :String},
    Password_Refresh: {type :Date},
});

export default mongoose.model<IUser>('User', UserSchema);