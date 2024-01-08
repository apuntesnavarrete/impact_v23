import { DeleteResult, UpdateResult } from 'typeorm';
import { ChampionsPlayersService } from './champions-players.service';
import { ChampionsPlayers } from './champions-players.entity';
export declare class ChampionsPlayersController {
    private championsPlayersService;
    constructor(championsPlayersService: ChampionsPlayersService);
    allTeams(): Promise<ChampionsPlayers[]>;
    findTeamById(id: number): Promise<ChampionsPlayers[]>;
    create(teamsData: Partial<ChampionsPlayers>): Promise<ChampionsPlayers>;
    updateTeam(id: number, teamsData: Partial<ChampionsPlayers>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
