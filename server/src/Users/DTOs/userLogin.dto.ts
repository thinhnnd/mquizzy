import { IUsers } from '../Interfaces/IUsers.interface';

export interface UserLoginDto extends IUsers {
    username: string;
    password: string;
    email: string;
}