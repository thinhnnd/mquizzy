import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "mongodb",
            "host": "localhost",
            "port": 27017,
            "database": "mquizzy",
            "entities": [
                "build-backend/**/**.entity{.ts,.js}"
            ]
        }),
        UsersModule],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule { }
