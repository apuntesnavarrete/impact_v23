import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Categories{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length:100
    })
    categorias: string
//mejorar con siglas 
//mix
//que sea unica
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