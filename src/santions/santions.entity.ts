import { IsDateString } from "class-validator";
import { Matches } from "src/matches/matches.entity";
import { Participants } from "src/participants/participants.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Santions{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Matches, matches => matches.id)
    matches : Matches

    @ManyToOne(() => Participants, participants => participants.id)
    participants : Participants

    @Column()
    description: string

    @Column({
        length: 12,
      })
      @IsDateString()
      dateStart: string;

    @Column()
    state: boolean

}