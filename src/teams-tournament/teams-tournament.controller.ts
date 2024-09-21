import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamsTournamentService } from './teams-tournament.service';
import { CreateTeamsTournamentDto } from './dto/create-teams-tournament.dto';
import { UpdateTeamsTournamentDto } from './dto/update-teams-tournament.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';

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
  @Auth(Role.ADMIN)

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamsTournamentDto: UpdateTeamsTournamentDto) {
    return this.teamsTournamentService.update(+id, updateTeamsTournamentDto);
  }
  @Auth(Role.ADMIN)

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsTournamentService.remove(+id);
  }
}
