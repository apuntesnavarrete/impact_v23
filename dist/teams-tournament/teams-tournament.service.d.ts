import { CreateTeamsTournamentDto } from './dto/create-teams-tournament.dto';
import { UpdateTeamsTournamentDto } from './dto/update-teams-tournament.dto';
import { TeamsTournament } from './entities/teams-tournament.entity';
import { Repository } from 'typeorm';
export declare class TeamsTournamentService {
    private readonly teamsTournamentRepository;
    constructor(teamsTournamentRepository: Repository<TeamsTournament>);
    create(createTeamsTournamentDto: CreateTeamsTournamentDto): Promise<TeamsTournament>;
    findAll(): Promise<TeamsTournament[]>;
    findOne(id: number): string;
    update(id: number, updateTeamsTournamentDto: UpdateTeamsTournamentDto): Promise<number>;
    remove(id: number): Promise<boolean>;
}
