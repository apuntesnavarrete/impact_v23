import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateTeamsTournamentDto {

    @IsInt()
    @IsOptional()
    readonly teamsId?: number;

    @IsInt()
    @IsOptional()

    readonly tournamentsId?: number;

    @IsInt()
    @IsOptional()
    readonly participantsId?: number;

}