import { Participants } from './participants.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class ParticipantsService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participants>);
    all(): Promise<Participants[]>;
    create(participantData: Partial<Participants>): Promise<Participants>;
    get(id: number): Promise<Participants[]>;
    update(id: number, data: Partial<Participants>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
