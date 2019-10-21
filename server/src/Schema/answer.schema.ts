import { Schema } from 'mongoose';

export const Answer = new Schema({
    answerText: String,
    isCorrect: Boolean,
    questionId: String,
    
})