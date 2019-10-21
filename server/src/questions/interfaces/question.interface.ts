import {Document} from 'mongoose';

export interface Question extends Document{
    question: string;
    choice: object [];
    explaination: string;
    author: string;
    subject: string;
    level: string;
    isActive: boolean;
    dateCreated: Date;
    dateUpdated: Date;
}