import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PlayersStandout } from './players-standout.entity';
export declare class PlayersStandoutService {
    private readonly PlayersStandoutRepository;
    constructor(PlayersStandoutRepository: Repository<PlayersStandout>);
    all(): Promise<PlayersStandout[]>;
    TournamentsById(id: number, data: Partial<PlayersStandout>): Promise<UpdateResult>;
    get(id: number): Promise<PlayersStandout[]>;
    create(data: Partial<PlayersStandout>): Promise<PlayersStandout>;
    delete(id: number): Promise<DeleteResult>;
}
