import { DeleteResult, UpdateResult } from 'typeorm';
import { RostersService } from './rosters.service';
import { Rosters } from './rosters.entity';
export declare class RostersController {
    private roustersService;
    constructor(roustersService: RostersService);
    allTeams(): Promise<Rosters[]>;
    findTeamById(id: number): Promise<Rosters[]>;
    create(teamsData: Partial<Rosters>): Promise<Rosters>;
    updateTeam(id: number, teamsData: Partial<Rosters>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
