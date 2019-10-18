import { Injectable } from "@nestjs/common";
import { IUsers } from "./Interfaces/IUsers.interface";

@Injectable()
export class UsersServices {
    constructor() {

    }
    public async login(username, password) {
        return new Promise((resolve) => {
            resolve({ username: username, password: password });
        })
    }
}
