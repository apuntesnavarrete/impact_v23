import { DeleteResult, UpdateResult } from 'typeorm';
import { PlayersStandoutService } from './players-standout.service';
import { PlayersStandout } from './players-standout.entity';
export declare class PlayersStandoutController {
    private playersStandoutService;
    constructor(playersStandoutService: PlayersStandoutService);
    allTeams(): Promise<PlayersStandout[]>;
    findTeamById(id: number): Promise<PlayersStandout[]>;
    create(teamsData: Partial<PlayersStandout>): Promise<PlayersStandout>;
    updateTeam(id: number, teamsData: Partial<PlayersStandout>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
