import { DeleteResult, UpdateResult } from 'typeorm';
import { SantionsService } from './santions.service';
import { Santions } from './santions.entity';
export declare class SantionsController {
    private santionsService;
    constructor(santionsService: SantionsService);
    allTeams(): Promise<Santions[]>;
    findTeamById(id: number): Promise<Santions[]>;
    create(teamsData: Partial<Santions>): Promise<Santions>;
    updateTeam(id: number, teamsData: Partial<Santions>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
