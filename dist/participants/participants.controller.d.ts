/// <reference types="multer" />
import { ParticipantsService } from './participants.service';
import { Participants } from './participants.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class ParticipantsController {
    private participantSevice;
    constructor(participantSevice: ParticipantsService);
    allParticipant(): Promise<Participants[]>;
    createParticipant(file: Express.Multer.File, participantData: Partial<Participants>): Promise<Participants>;
    getParticipant(id: number): Promise<Participants[]>;
    updateParticipant(id: number, data: Partial<Participants>): Promise<UpdateResult>;
    deleteParticipant(id: number): Promise<DeleteResult>;
}
