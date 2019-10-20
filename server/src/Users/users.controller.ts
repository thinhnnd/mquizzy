import { Controller, Get, Post, Body, Res, Req } from "@nestjs/common";
import { UserLoginDto } from "./DTOs/userLogin.dto";
import { UsersService } from "./users.service";
import { SuccessResponse } from "../Shared/success.dto";
import { Request, Response } from "express";
@Controller()
export class UsersController {
    constructor(private usersService: UsersService) { };
    @Get("/users")
    public async getUser(@Req() req: Request, @Res() res: Response) {
        const users = await this.usersService.findAllUsers();
        const payload = new SuccessResponse("All Users", users);
        res.json(payload);
    }
    @Post("/users")
    public async createUser(user) {

    }
    @Post("/users/login")
    public async login(@Res() res: Response, @Body() userLoginDto: UserLoginDto) {
        try {
            if (userLoginDto) {
                const { username, password } = userLoginDto;
                // const user = await this.usersService.login();
            }
        }
        catch (err) {

        }
    }
}