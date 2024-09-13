import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Matches } from './matches.entity';
export declare class MatchesService {
    private readonly MatchesRepository;
    constructor(MatchesRepository: Repository<Matches>);
    all(): Promise<Matches[]>;
    MatchesById(id: number, data: Partial<Matches>): Promise<UpdateResult>;
    get(id: number): Promise<Matches[]>;
    create(data: Partial<Matches>): Promise<Matches>;
    delete(id: number): Promise<DeleteResult>;
}
