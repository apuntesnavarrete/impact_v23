import { Participants } from "src/participants/participants.entity";
export declare class Leagues {
    id: number;
    name: string;
    Alias: string;
    date_fundation: string;
    participants: Participants;
    logo: string;
    createdAt: Date;
    updatedAt: Date;
}
