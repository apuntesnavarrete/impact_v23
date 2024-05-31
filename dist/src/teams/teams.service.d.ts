import { Teams } from './teams.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class TeamsService {
    private readonly TeamsRepository;
    constructor(TeamsRepository: Repository<Teams>);
    all(): Promise<Teams[]>;
    teamById(id: number, data: Partial<Teams>): Promise<UpdateResult>;
    get(id: number): Promise<Teams[]>;
    create(data: Partial<Teams>): Promise<Teams>;
    delete(id: number): Promise<DeleteResult>;
}
