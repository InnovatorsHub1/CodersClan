import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: false },
        role: { type: String, required: true, enum: ['admin', 'user'] },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;