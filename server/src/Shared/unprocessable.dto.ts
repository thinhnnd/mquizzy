import { IResponse } from './response.dto';
import { HttpException } from '@nestjs/common';
export class UnprocessableException extends HttpException {
    message: string;
    error: string;
    statusCode: number;
    constructor(message: string, error: string = "Unprocessable Entity", statusCode: number = 422) {
        const response = {
            message: message,
            error: error,
            statusCode: statusCode
        }
        super(response, 422);
    }
}