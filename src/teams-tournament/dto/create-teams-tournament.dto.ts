import { IsInt, IsNotEmpty } from "class-validator";

export class CreateTeamsTournamentDto {

    @IsInt()
    @IsNotEmpty()
    readonly teamsId: number;

    @IsInt()
    @IsNotEmpty()
    readonly tournamentsId: number;

    @IsInt()
    @IsNotEmpty()
    readonly participantsId: number;


}
