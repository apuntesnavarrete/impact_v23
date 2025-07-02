import { Injectable } from '@nestjs/common';
import { CreateTeamsTournamentDto } from './dto/create-teams-tournament.dto';
import { UpdateTeamsTournamentDto } from './dto/update-teams-tournament.dto';
import { TeamsTournament } from './entities/teams-tournament.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsTournamentService {

 constructor(
  @InjectRepository(TeamsTournament)
  private readonly teamsTournamentRepository: Repository<TeamsTournament>,

 ){

 }

 async create(createTeamsTournamentDto: CreateTeamsTournamentDto): Promise<TeamsTournament> {
  const { teamsId, tournamentsId, participantsId } = createTeamsTournamentDto;
  
  const newTeamsTournament = this.teamsTournamentRepository.create({
    teams: { id: teamsId },
    tournaments: { id: tournamentsId },
    participants: { id: participantsId }
  });

  return await this.teamsTournamentRepository.save(newTeamsTournament);
}

  async findAll(): Promise<TeamsTournament[]> {
 
    const santions = await this.teamsTournamentRepository.find({
       relations:  ['teams', 'participants','tournaments'] ,
      });
 return santions
   }

  findOne(id: number) {
    return `This action returns a #${id} teamsTournament`;
  }

async findByTournamentId(tournamentId: number): Promise<TeamsTournament[]> {
  return await this.teamsTournamentRepository.find({
    where: {
      tournaments: { id: tournamentId }
    },
    relations: ['teams', 'participants', 'tournaments'],
  });
}


  async update(id: number, updateTeamsTournamentDto: UpdateTeamsTournamentDto) {
    const data = await this.teamsTournamentRepository.findOne({ where: { id }, relations: ['teams', 'tournaments', 'participants'] });
    


   if (!data) {
    throw new Error(`TeamsTournament with id ${id} not found`);
  }


  if (updateTeamsTournamentDto.teamsId) {
    data.teams.id = updateTeamsTournamentDto.teamsId


  }

  if (updateTeamsTournamentDto.participantsId) {
    data.participants.id = updateTeamsTournamentDto.participantsId

  }

  if (updateTeamsTournamentDto.tournamentsId) {
    data.tournaments.id = updateTeamsTournamentDto.tournamentsId
  }

  const updateResult = await this.teamsTournamentRepository.update(id, data);

    if (updateResult.affected === 0) {
        throw new Error(`Failed to update TeamsTournament with id ${id}`);
    }

    return data.id;
  }

  async remove(id: number): Promise<boolean> {
    const data = await this.teamsTournamentRepository.findOne({ where: { id }, relations: ['teams', 'tournaments', 'participants'] });


    if (!data) {
      throw new Error(`TeamsTournament with id ${id} not found`);
    }
  
    const deleteResult = await this.teamsTournamentRepository.delete(id);

    if (deleteResult.affected === 0) {
      return false; // No se pudo eliminar el objeto
  }

    return true
  }

}
