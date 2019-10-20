import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import CONFIG from '../Common/config';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        if (!request.headers.authorization)
            throw new UnauthorizedException("No token was provided");
        else {
            try {
                const token = request.headers.authorization.split(" ")[1];
                const decoded = verify(token, CONFIG.SECRET_KEY);
                if (!decoded) throw new UnauthorizedException("Invalid token");
            } catch (error) {
                throw new UnauthorizedException(error.message);
            }
        }
        return true;
    }

}