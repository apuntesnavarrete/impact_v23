import { Teams } from './teams.entity';
import { Repository } from 'typeorm';
export declare class TeamsService {
    private readonly TeamsRepository;
    constructor(TeamsRepository: Repository<Teams>);
    all(): Promise<Teams[]>;
}
