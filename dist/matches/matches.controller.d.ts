import { DeleteResult, UpdateResult } from 'typeorm';
import { MatchesService } from './matches.service';
import { Matches } from './matches.entity';
export declare class MatchesController {
    private matchesService;
    constructor(matchesService: MatchesService);
    allTeams(): Promise<Matches[]>;
    findTeamById(id: number): Promise<Matches[]>;
    create(teamsData: Partial<Matches>): Promise<Matches>;
    updateTeam(id: number, Data: Partial<Matches>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
