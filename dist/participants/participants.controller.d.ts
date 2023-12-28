import { ParticipantsService } from './participants.service';
import { Participants } from './participants.entity';
export declare class ParticipantsController {
    private participantSevice;
    constructor(participantSevice: ParticipantsService);
    allParticipant(): Promise<Participants[]>;
    createParticipant(participantData: Partial<Participants>): Promise<Participants>;
    getParticipant(id: number): Promise<Participants[]>;
    updateParticipant(id: number, data: any): Promise<any>;
    deleteParticipant(id: number): Promise<number>;
}
