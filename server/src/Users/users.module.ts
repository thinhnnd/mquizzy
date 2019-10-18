import { Module } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersServices]
})
export class UsersModule { }