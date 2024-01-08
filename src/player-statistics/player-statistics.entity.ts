import { Matches } from "src/matches/matches.entity";
import { Participants } from "src/participants/participants.entity";
import { Teams } from "src/teams/teams.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Playerstatistics{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teams, teams => teams.id)
    teams : Teams

    @ManyToOne(() => Matches, matches => matches.id)
    matches : Matches

    @ManyToOne(() => Participants, participants => participants.id)
    participants : Participants

     @Column()
    annotations : number

    @Column()
    attendance : boolean
}