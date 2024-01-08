import { IsDateString } from "class-validator";
import { Teams } from "src/teams/teams.entity";
import { Tournaments } from "src/tournaments/tournaments.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matches{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 12,
      })
      @IsDateString()
      date: string;
//futuro hora y dia


@ManyToOne(() => Teams, { eager: true })
  @JoinColumn({ name: 'teamHome' })  // Nombre de la columna que almacenará el ID de Participants
  teamHome: Teams;

  @Column()
  localgoals: number;

  @Column()
  pointsLocal: number;

  @ManyToOne(() => Teams, { eager: true })
  @JoinColumn({ name: 'teamAway' })  // Nombre de la columna que almacenará el ID de Participants
  teamAway: Teams;
  
  @Column()
  visitangoals: number;

  @Column()
  pointsVisitan: number;

  @ManyToOne(() => Tournaments, tournaments => tournaments.id)
  tournaments : Tournaments

}