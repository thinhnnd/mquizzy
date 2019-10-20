import { Controller, Get, Post, Req, Res, Body, UseFilters } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../Users/DTOs/userLogin.dto';
import { User } from "../Users/Interfaces/User.interface";
import { HttpExceptionFilter } from '../Common/http-exception.filter';
import { UserRegisterDto } from '../Users/DTOs/userSignup.dto';
import { SuccessResponse } from '../Shared/success.dto';
@Controller('auth')
@UseFilters(HttpExceptionFilter)
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('login')
    public async login(@Res() res: Response, @Body() userLogin: UserLoginDto) {
        try {
            const user: User = await this.authService.login(userLogin);
            if (user) return res.json(new SuccessResponse("Login Success", user));
        }
        catch (error) {
            throw error;
        }
    }
    @Post('/register')
    public async register(@Res() res: Response, @Body() userRegister: UserRegisterDto) {
        try {
            const newUser: User = await this.authService.register(userRegister);
            if (newUser) return res.json(new SuccessResponse("Register Success", newUser));
        } catch (error) {
            throw error;
        }
    }
}