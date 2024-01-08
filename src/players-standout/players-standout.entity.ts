import { Participants } from "src/participants/participants.entity";
import { Teams } from "src/teams/teams.entity";
import { Tournaments } from "src/tournaments/tournaments.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayersStandout{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teams, teams => teams.id)
    teams : Teams

    @ManyToOne(() => Tournaments, tournaments => tournaments.id)
    tournaments : Tournaments

    
    @ManyToOne(() => Participants, participants => participants.id)
    participants : Participants

    @Column()
    position: string
}
