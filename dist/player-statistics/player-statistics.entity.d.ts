import { Matches } from "src/matches/matches.entity";
import { Participants } from "src/participants/participants.entity";
import { Teams } from "src/teams/teams.entity";
export declare class Playerstatistics {
    id: number;
    teams: Teams;
    matches: Matches;
    participants: Participants;
    annotations: number;
    attendance: boolean;
}
