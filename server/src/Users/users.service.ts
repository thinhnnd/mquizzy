import { Injectable } from "@nestjs/common";
import { IUsers } from "./Interfaces/IUsers.interface";
import { UsersEntity } from "../Entity/users.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRegisterDto } from "./DTOs/userSignup.dto";
import { SuccessResponse } from "src/Shared/success.dto";
@Injectable()
export class UsersServices {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) { }
    public async login(username, password) {
        return new Promise((resolve) => {
            resolve({ username: username, password: password });
        })
    }
    public async createUser(userRegister: UserRegisterDto) {
        const user: UsersEntity = await this.userRepository.findOne({ username: userRegister.username });
        if (user) {
            const response: SuccessResponse = {
                message: "User has been existed",
                statusCode: 422,
                data: "",
                error: null
            }
            return response;
        }
        else {
            
        }
    }
}
