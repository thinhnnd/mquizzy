import { Document } from "mongoose";
export interface User extends Document {
    username: string;
    email?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    address?: string;
    birthday?: string;
}