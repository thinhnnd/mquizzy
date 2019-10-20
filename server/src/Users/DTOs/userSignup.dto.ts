import { IsString, MinLength, IsEmail, IsOptional } from 'class-validator';
export class UserRegisterDto {
    @IsString()
    @MinLength(3)
    username: string;
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(6)
    password: string;
    @IsString()
    @IsOptional()
    fullName?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    birthday?: string;
}