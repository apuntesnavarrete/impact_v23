import { Participants } from "src/participants/participants.entity";
import { Teams } from "src/teams/teams.entity";
import { Tournaments } from "src/tournaments/tournaments.entity";
export declare class PlayersStandout {
    id: number;
    teams: Teams;
    tournaments: Tournaments;
    participants: Participants;
    position: string;
}
