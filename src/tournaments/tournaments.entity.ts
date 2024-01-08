import { IsDateString, IsNotEmpty } from "class-validator";
import { Categories } from "src/categories/categories.entity";
import { Leagues } from "src/leagues/leagues.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Tournaments{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
      })
      @IsNotEmpty()
      idName: string;
//mejorar con siglas 
//EDMIXA23
//que sea unica
      @Column({
        length:255,
        nullable: true,

    })

    
    description: string

    @Column({
        length: 4,
      })
      @IsDateString()
      date_fundation: string;

      @ManyToOne(() => Leagues, leagues => leagues.id)
      leagues : Leagues

      @ManyToOne(() => Categories, categories => categories.id)
      categories : Categories

      @CreateDateColumn()
      createdAt: Date;
    
      @UpdateDateColumn()
      updatedAt: Date;
}