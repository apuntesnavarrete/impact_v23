import { TeamsTournamentService } from './teams-tournament.service';
import { CreateTeamsTournamentDto } from './dto/create-teams-tournament.dto';
import { UpdateTeamsTournamentDto } from './dto/update-teams-tournament.dto';
export declare class TeamsTournamentController {
    private readonly teamsTournamentService;
    constructor(teamsTournamentService: TeamsTournamentService);
    create(createTeamsTournamentDto: CreateTeamsTournamentDto): Promise<import("./entities/teams-tournament.entity").TeamsTournament>;
    findAll(): Promise<import("./entities/teams-tournament.entity").TeamsTournament[]>;
    findOne(id: string): string;
    update(id: string, updateTeamsTournamentDto: UpdateTeamsTournamentDto): Promise<number>;
    remove(id: string): Promise<boolean>;
}
