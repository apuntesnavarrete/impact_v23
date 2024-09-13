import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Leagues } from './leagues.entity';
export declare class LeagueService {
    private readonly LeaguesRepository;
    constructor(LeaguesRepository: Repository<Leagues>);
    all(): Promise<Leagues[]>;
    LeagueById(id: number, data: Partial<Leagues>): Promise<UpdateResult>;
    get(id: number): Promise<Leagues[]>;
    create(data: Partial<Leagues>): Promise<Leagues>;
    delete(id: number): Promise<DeleteResult>;
}
