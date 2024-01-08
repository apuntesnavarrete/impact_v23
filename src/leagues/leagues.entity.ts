import { IsDateString, IsEmpty, IsNotEmpty } from "class-validator";
import { Participants } from "src/participants/participants.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Leagues{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
      })
      @IsNotEmpty()
      name: string;
//mejorar con siglas 
//spartaq
//que sea unica
      @Column({
        length: 12,
      })
      @IsDateString()
      date_fundation: string;
      
      @ManyToOne(() => Participants, participants => participants.id)
      participants : Participants


      @Column({
        length: 100,
       nullable: true,
        default: 'default_league.jpg'
      })
      @IsEmpty()

      logo: string; //  *** debe ser opcional cambiar **

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}