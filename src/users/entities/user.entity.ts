import { Role } from "src/common/role.enum";
import { Entity } from "typeorm";

import {
    Column,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ unique: true, nullable: false })
    email: string;
  
    @Column({ nullable: false, select: false })
    password: string;
  
    @Column({ type: 'enum' ,default: Role.USER , enum:Role})
    role: string;
  
    @DeleteDateColumn()
    deletedAt: Date;

}
