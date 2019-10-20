import { IsString, MinLength, IsEmail, IsOptional, ValidateIf } from 'class-validator';
export class UserLoginDto {
    @ValidateIf(o => !o.email)
    @IsString()
    username: string;
    @IsString()
    @MinLength(6)
    password: string;
    @ValidateIf(o => !o.username)
    @IsEmail()
    email: string;
}