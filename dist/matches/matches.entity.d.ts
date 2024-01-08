import { Teams } from "src/teams/teams.entity";
import { Tournaments } from "src/tournaments/tournaments.entity";
export declare class Matches {
    id: number;
    date: string;
    teamHome: Teams;
    localgoals: number;
    pointsLocal: number;
    teamAway: Teams;
    visitangoals: number;
    pointsVisitan: number;
    tournaments: Tournaments;
}
