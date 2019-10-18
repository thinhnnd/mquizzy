import { IResponse } from './response.dto';
export class UnprocessableResponse implements IResponse {
    message: string;
    error: Error;
    statusCode: number;
}