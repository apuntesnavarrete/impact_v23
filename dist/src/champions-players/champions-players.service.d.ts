import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ChampionsPlayers } from './champions-players.entity';
export declare class ChampionsPlayersService {
    private readonly ChampionsPlayersRepository;
    constructor(ChampionsPlayersRepository: Repository<ChampionsPlayers>);
    all(): Promise<ChampionsPlayers[]>;
    TournamentsById(id: number, data: Partial<ChampionsPlayers>): Promise<UpdateResult>;
    get(id: number): Promise<ChampionsPlayers[]>;
    create(data: Partial<ChampionsPlayers>): Promise<ChampionsPlayers>;
    delete(id: number): Promise<DeleteResult>;
}
