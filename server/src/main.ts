import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './Common/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }));
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3001);
}
bootstrap();
