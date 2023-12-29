import { TeamsService } from './teams.service';
import { Participants } from 'src/participants/participants.entity';
export declare class TeamsController {
    private teamService;
    constructor(teamService: TeamsService);
    allTeams(): Promise<Participants[]>;
}
