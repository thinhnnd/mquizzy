import { IResponse } from './response.dto';
export class SuccessResponse implements IResponse {
    message: string;
    error: null;
    statusCode: number;
    data?: {}
    constructor(message: string = "Success", data: any, statusCode: number = 200) {
        this.message = message;
        this.statusCode = statusCode;
        data ? this.data = data : null;
        this.error = null;
    }
}