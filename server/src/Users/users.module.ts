import { Module } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "../Entity/users.entity";
@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    controllers: [UsersController],
    providers: [UsersServices]
})
export class UsersModule { }