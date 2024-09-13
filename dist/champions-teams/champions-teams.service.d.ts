import { ChampionsTeams } from 'src/champions-teams/champions-teams.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class ChampionsTeamsService {
    private readonly ChampionsTeamsRepository;
    constructor(ChampionsTeamsRepository: Repository<ChampionsTeams>);
    all(): Promise<ChampionsTeams[]>;
    TournamentsById(id: number, data: Partial<ChampionsTeams>): Promise<UpdateResult>;
    get(id: number): Promise<ChampionsTeams[]>;
    create(data: Partial<ChampionsTeams>): Promise<ChampionsTeams>;
    delete(id: number): Promise<DeleteResult>;
}
