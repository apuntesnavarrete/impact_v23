/// <reference types="multer" />
import { TeamsService } from './teams.service';
import { Participants } from 'src/participants/participants.entity';
import { Teams } from './teams.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class TeamsController {
    private teamService;
    constructor(teamService: TeamsService);
    allTeams(): Promise<Participants[]>;
    findTeamById(id: number): Promise<Teams[]>;
    create(file: Express.Multer.File, teamsData: Partial<Teams>): Promise<Teams>;
    updateTeam(id: number, teamsData: Partial<Teams>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
    uploadImage(image: Express.Multer.File): {
        filename: string;
    };
}
