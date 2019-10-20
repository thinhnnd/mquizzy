import { Controller, Get, Post, Body, Res, Req } from "@nestjs/common";
import { UserLoginDto } from "./DTOs/userLogin.dto";
import { UsersService } from "./users.service";
import { SuccessResponse } from "../Shared/success.dto";
import { Request, Response } from "express";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../Auth/auth.guard";
@Controller()
export class UsersController {
    constructor(private usersService: UsersService) { };
    @UseGuards(JwtAuthGuard)
    @Get("/users")
    public async getUser(@Req() req: Request, @Res() res: Response) {
        const users = await this.usersService.findAllUsers();
        const payload = new SuccessResponse("All Users", users);
        res.json(payload);
    }
}