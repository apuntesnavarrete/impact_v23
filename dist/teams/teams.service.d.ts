import { Teams } from './teams.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Cache } from 'cache-manager';
export declare class TeamsService {
    private readonly TeamsRepository;
    private cacheManager;
    constructor(TeamsRepository: Repository<Teams>, cacheManager: Cache);
    all(): Promise<Teams[]>;
    teamById(id: number, data: Partial<Teams>): Promise<UpdateResult>;
    get(id: number): Promise<Teams[]>;
    create(data: Partial<Teams>): Promise<Teams>;
    delete(id: number): Promise<DeleteResult>;
}
