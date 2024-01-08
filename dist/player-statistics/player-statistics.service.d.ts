import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Playerstatistics } from './player-statistics.entity';
export declare class PlayersStatisticsService {
    private readonly PlayerStatisticsRepository;
    constructor(PlayerStatisticsRepository: Repository<Playerstatistics>);
    all(): Promise<Playerstatistics[]>;
    PlayersStatisticsById(id: number, data: Partial<Playerstatistics>): Promise<UpdateResult>;
    get(id: number): Promise<Playerstatistics[]>;
    create(data: Partial<Playerstatistics>): Promise<Playerstatistics>;
    delete(id: number): Promise<DeleteResult>;
}
