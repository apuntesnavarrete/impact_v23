import { Matches } from "src/matches/matches.entity";
import { Participants } from "src/participants/participants.entity";
export declare class Santions {
    id: number;
    matches: Matches;
    participants: Participants;
    description: string;
    dateStart: string;
    state: boolean;
}
