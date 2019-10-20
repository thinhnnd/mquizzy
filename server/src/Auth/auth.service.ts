import { UsersService } from '../Users/users.service';
import { compare, genSalt, hash } from 'bcrypt';
import { UserRegisterDto } from '../Users/DTOs/userSignup.dto';
import { UserLoginDto } from '../Users/DTOs/userLogin.dto';
import { UnprocessableException } from '../Shared/unprocessable.dto';
import { User } from "../Users/Interfaces/User.interface";
import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }
    public async login(userLogin: UserLoginDto) {
        const { username, email, password } = userLogin;
        const opts = userLogin.username ? { "username": username } : { "email": email }
        const user = await this.userService.findOneUser(opts);
        console.log(user);

        if (!user) {
            throw new NotFoundException("User not found");
        }
        else {
            const isMatch = await this.checkPassword(password, user.password);
            if (!isMatch) throw new UnprocessableException("Password does not match");
            else {
                return await this.userService.findUserById(user.id);
            }
        }
    }
    public async register(userRegister: UserRegisterDto): Promise<User> {
        const user: User = await this.userService.findOneUser({ username: userRegister.username });
        if (user) {
            throw new UnprocessableException(`Username ${user.username} is already registered!`);
        }
        else {
            userRegister.password = await this.createHash(userRegister.password);
            const newUser = await this.userService.createUser(userRegister);
            console.log("new user", newUser);
            return newUser;
        }
    }
    //internal
    private async checkPassword(password: string, hashedPassword: string): Promise<boolean> {
        return await compare(password, hashedPassword);
    }
    private async createHash(str: string): Promise<string> {
        const salt = await genSalt(10);
        return await hash(str, salt);
    }
    private async createToken(): Promise<string> {
        return
    }
    public async validateUser(payload): Promise<User> {
        return await this.userService.findUserById(payload.id);
    }
}