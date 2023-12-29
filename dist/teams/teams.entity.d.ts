import { Participants } from "src/participants/participants.entity";
export declare class Teams {
    id: number;
    name: string;
    participants: Participants;
    logo: string;
    createdAt: Date;
    updatedAt: Date;
}
