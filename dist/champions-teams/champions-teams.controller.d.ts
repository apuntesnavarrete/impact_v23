import { DeleteResult, UpdateResult } from 'typeorm';
import { ChampionsTeamsService } from './champions-teams.service';
import { ChampionsTeams } from './champions-teams.entity';
export declare class ChampionsTeamsController {
    private championsTeamsService;
    constructor(championsTeamsService: ChampionsTeamsService);
    allTeams(): Promise<ChampionsTeams[]>;
    findTeamById(id: number): Promise<ChampionsTeams[]>;
    create(teamsData: Partial<ChampionsTeams>): Promise<ChampionsTeams>;
    updateTeam(id: number, teamsData: Partial<ChampionsTeams>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
