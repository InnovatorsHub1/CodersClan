import { Document, ObjectId, Schema, model } from 'mongoose';

export interface IUser extends Document {
    _id: ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: string;
}

const UserSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roleId: { type: String, required: true },
},
    {
        timestamps: true,      // ← enable createdAt & updatedAt
    }

);

export const UserModel = model<IUser>('User', UserSchema, 'users');

