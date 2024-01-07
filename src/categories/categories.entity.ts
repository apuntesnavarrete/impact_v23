import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Categories{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length:100
    })
    categorias: string

    @Column({
        length:255,
        nullable: true,

    })
    description: string

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}