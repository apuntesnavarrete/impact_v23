import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamsTournamentService } from './teams-tournament.service';
import { CreateTeamsTournamentDto } from './dto/create-teams-tournament.dto';
import { UpdateTeamsTournamentDto } from './dto/update-teams-tournament.dto';

@Controller('teams-tournament')
export class TeamsTournamentController {
  constructor(private readonly teamsTournamentService: TeamsTournamentService) {}

  @Post()
  create(@Body() createTeamsTournamentDto: CreateTeamsTournamentDto) {
    console.log(createTeamsTournamentDto)
    return this.teamsTournamentService.create(createTeamsTournamentDto);
  }

  @Get()
  findAll() {
    return this.teamsTournamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsTournamentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamsTournamentDto: UpdateTeamsTournamentDto) {
    return this.teamsTournamentService.update(+id, updateTeamsTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsTournamentService.remove(+id);
  }
}
