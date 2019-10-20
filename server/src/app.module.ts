import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { AuthModule } from './Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import CONFIG from './Common/config';
@Module({
    imports: [
        MongooseModule.forRoot(CONFIG.URI, { useNewUrlParser: true, useUnifiedTopology: true }),
        UsersModule, AuthModule],
})
export class AppModule { }
