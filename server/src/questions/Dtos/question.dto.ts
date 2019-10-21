import { IsString, IsArray, IsBoolean, ValidateNested} from 'class-validator';

export class QuestionDto {
    @IsString()
    question: string;

    @ValidateNested({each: true})
    choice: Choice[];

    @IsString()
    explaination?: string;

    @IsString()
    level: string;

    @IsString()
    subject: string;
}


class Choice {
    @IsString()
    answerText: string;

    @IsBoolean()
    isCorrect: boolean;
}
