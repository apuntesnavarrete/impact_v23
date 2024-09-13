/// <reference types="multer" />
import { DeleteResult, UpdateResult } from 'typeorm';
import { LeagueService } from './leagues.service';
import { Leagues } from './leagues.entity';
export declare class LeagueController {
    private leagueService;
    constructor(leagueService: LeagueService);
    allTeams(): Promise<Leagues[]>;
    findTeamById(id: number): Promise<Leagues[]>;
    create(file: Express.Multer.File, teamsData: Partial<Leagues>): Promise<Leagues>;
    updateTeam(id: number, teamsData: Partial<Leagues>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
