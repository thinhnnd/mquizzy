import * as passport from 'passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { AuthService } from "./auth.service";
import CONFIG from '../Common/config';
import { JwtPayload } from './jwt-payload.dto';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: CONFIG.SECRET_KEY
            }
        );
    }
    async validate(payload: JwtPayload) {
        return await this.authService.validateUser(payload);
    }
}