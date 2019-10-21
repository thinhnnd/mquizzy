import { Schema } from "mongoose";

export const QuestionSchema = new Schema({
    questionText: String,
    choice: [Object],
    explaination: String,
    author: String,
    subject: String,
    level: String,
    isActive: Boolean,
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: { type: Date, default: null}
})