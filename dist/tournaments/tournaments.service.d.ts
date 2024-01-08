import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Tournaments } from './tournaments.entity';
export declare class TournamentsService {
    private readonly TournamentsRepository;
    constructor(TournamentsRepository: Repository<Tournaments>);
    all(): Promise<Tournaments[]>;
    TournamentsById(id: number, data: Partial<Tournaments>): Promise<UpdateResult>;
    get(id: number): Promise<Tournaments[]>;
    create(data: Partial<Tournaments>): Promise<Tournaments>;
    delete(id: number): Promise<DeleteResult>;
}
