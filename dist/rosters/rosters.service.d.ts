import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Rosters } from './rosters.entity';
export declare class RostersService {
    private readonly RostersRepository;
    constructor(RostersRepository: Repository<Rosters>);
    all(): Promise<Rosters[]>;
    rostersById(id: number, data: Partial<Rosters>): Promise<UpdateResult>;
    get(id: number): Promise<Rosters[]>;
    create(data: Partial<Rosters>): Promise<Rosters>;
    delete(id: number): Promise<DeleteResult>;
}
