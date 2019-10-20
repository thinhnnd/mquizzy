import { Schema } from "mongoose";

export const UserSchema = new Schema({
    username: String,
    fullName: String,
    email: String,
    password: String,
    address: String,
    dob: Date
})