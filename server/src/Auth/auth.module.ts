import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../Users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import CONFIG from '../Common/config';
@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: CONFIG.SECRET_KEY,
            signOptions: {
                expiresIn: 300,
            }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }