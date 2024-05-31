import { DeleteResult, UpdateResult } from 'typeorm';
import { TournamentsService } from './tournaments.service';
import { Tournaments } from './tournaments.entity';
export declare class TournamentsController {
    private tournamentsService;
    constructor(tournamentsService: TournamentsService);
    allTeams(): Promise<Tournaments[]>;
    findTeamById(id: number): Promise<Tournaments[]>;
    create(teamsData: Partial<Tournaments>): Promise<Tournaments>;
    updateTeam(id: number, teamsData: Partial<Tournaments>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
