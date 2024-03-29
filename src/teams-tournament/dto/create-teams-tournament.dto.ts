import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTeamsTournamentDto {

    @IsInt()
    @IsNotEmpty()
    readonly teamsId: number;

    @IsInt()
    @IsNotEmpty()
    readonly tournamentsId: number;

    @IsInt()
    @IsOptional()
    readonly participantsId: number | null;


}
