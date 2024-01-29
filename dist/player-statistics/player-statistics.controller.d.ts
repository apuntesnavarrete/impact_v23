import { DeleteResult, UpdateResult } from 'typeorm';
import { PlayersStatisticsService } from './player-statistics.service';
import { Playerstatistics } from './player-statistics.entity';
export declare class PlayersStatisticsController {
    private playersStatisticsService;
    constructor(playersStatisticsService: PlayersStatisticsService);
    allTeams(): Promise<Playerstatistics[]>;
    findTeamById(id: number): Promise<Playerstatistics[]>;
    create(teamsData: Partial<Playerstatistics>[]): Promise<Partial<Playerstatistics>[]>;
    updateTeam(id: number, teamsData: Partial<Playerstatistics>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
