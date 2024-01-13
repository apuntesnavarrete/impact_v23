import { Participants } from "src/participants/participants.entity";
import { Teams } from "src/teams/teams.entity";
import { Tournaments } from "src/tournaments/tournaments.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Rosters{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teams, teams => teams.id)
    teams : Teams

    @ManyToOne(() => Tournaments, tournaments => tournaments.id)
    tournaments : Tournaments

    @ManyToOne(() => Participants, participants => participants.id)
    participants : Participants

    @Column()
    dorsal: string

    @Column()
    typeParticipant: string

    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
    //meter como enum

    //agregar un campo de activo
}