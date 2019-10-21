import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Question } from './interfaces/question.interface';

import { QuestionDto } from './Dtos/question.dto';

@Injectable()
export class QuestionsService {
    constructor( 
        @InjectModel('Question')
        private readonly questionModel: Model<Question>
    ) {}

    async create(data: QuestionDto, author: string) {
        const user = await this.questionModel.create({...data, author: author})
        return user;
    }

    async getAll() {
        const questions = await this.questionModel.find();
        return questions;
    }

    async findById(id: string) {
        const question = await this.questionModel.findById(id);
        return question;
    }

    async update(id: string, data: QuestionDto, author: string) {
        // const question = await this.questionModel.findOne({_id: id});
        try {
            console.log(data);
            let dateUpdated = Date.now();
            return await this.questionModel.findOneAndUpdate({_id: id}, {...data, dateUpdated, author}, { new: true }).exec();
        }
        catch (err) {
            return err;
        }
      // return await this.questionModel.findOne({_id: id});
    }
}
