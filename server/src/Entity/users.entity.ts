import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class UsersEntity {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    username: string;
    @Column()
    fullName: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    address: string;
    @Column()
    dob: Date;
}