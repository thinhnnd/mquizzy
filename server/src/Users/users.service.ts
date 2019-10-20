import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserRegisterDto } from "./DTOs/userSignup.dto";
import { User } from "./Interfaces/User.interface";
@Injectable()
export class UsersService {
    constructor(
        @InjectModel("User")
        private readonly userModel: Model<User>
    ) { }
    public async findUserById(id: string): Promise<User> {
        return await this.userModel.findById(id).select("-password");
    }
    public async findAllUsers(): Promise<User[]> {
        return await this.userModel.find().select("-password");
    }
    public async findOneUser(options: any): Promise<User> {
        return await this.userModel.findOne(options);
    }
    public async createUser(user: UserRegisterDto): Promise<User> {
        const newUser = await this.userModel.create(user);
        if (newUser) return await this.userModel.findById(newUser.id).select("-password");
    }
    public async updateUser(user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(user.id, user).select("-password");
    }
    public async deleteUser(user: User): Promise<User> {
        return await this.userModel.findByIdAndDelete(user.id).select("-password");
    }
}
