import { Participants } from "src/participants/participants.entity";
import { Teams } from "src/teams/teams.entity";
import { Tournaments } from "src/tournaments/tournaments.entity";
export declare class Rosters {
    id: number;
    teams: Teams;
    tournaments: Tournaments;
    participants: Participants;
    dorsal: string;
    typeParticipant: string;
    createdAt: Date;
    updatedAt: Date;
}
