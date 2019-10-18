import { Controller, Get, Post, Body, Response } from "@nestjs/common";
import { UserLoginDto } from "./DTOs/userLogin.dto";
import { UsersServices } from "./users.service";
@Controller()
export class UsersController {
    constructor(private usersService: UsersServices) { };
    @Get("/users")
    public async getUser() {
        return "hello";
    }
    @Post("/users")
    public async createUser(user) {

    }
    @Post("/users/login")
    public async login(@Response() res: Response, @Body() userLoginDto: UserLoginDto) {
        try {
            if (userLoginDto) {
                const { username, password } = userLoginDto;
                const user = await this.usersService.login(username, password);
            }
        }
        catch (err) {

        }
    }
}