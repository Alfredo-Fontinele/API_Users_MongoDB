import mongoose, { Document, Model } from "mongoose";

export interface User {
    name: string;
    email: string;
    password: string;
}

interface UserModel extends Model<User, Document> {}

const UserSchemaDB = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model<UserModel>("User", UserSchemaDB);
