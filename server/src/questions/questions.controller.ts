import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body
} from '@nestjs/common';


import { QuestionDto } from './Dtos/question.dto';
import {QuestionsService} from './questions.service';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) { }

    @Get()
    getAllQuestions() {
        this.questionsService.getAll();
    }

    @Get(':id')
    readQuestion(@Param('id') id: string ) {
        console.log(id);
        return this.questionsService.findById(id);
    }

    @Post()
    create(@Body() data: QuestionDto) {
        console.log(data);
        return this.questionsService.create(data, 'thinhnnd');
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: QuestionDto, author: string) {
        return this.questionsService.update(id, data, author);
    }

    @Delete(':id')
    destroy(@Param() id: string) {

    }
}
