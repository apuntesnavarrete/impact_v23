import { Participants } from './participants.entity';
import { Repository } from 'typeorm';
export declare class ParticipantsService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participants>);
    all(): Promise<Participants[]>;
    create(participantData: Partial<Participants>): Promise<Participants>;
    get(id: number): Promise<Participants[]>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
