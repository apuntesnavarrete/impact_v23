import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Matches } from './matches.entity';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
//import { Cache } from 'cache-manager';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Matches)
    private readonly MatchesRepository: Repository<Matches>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Matches[]> {
 
   const matches = await this.MatchesRepository.find({
      relations: ['tournaments','teamHome','teamAway' ] ,
     });
return matches
  }
//corregir nombre
  async MatchesById(id : number, data : Partial<Matches> ) : Promise<UpdateResult> {
    return this.MatchesRepository.update(id , data)
  }

async findByTournamentId(tournamentId: number): Promise<Matches[]> {
  return this.MatchesRepository.find({
    where: {
      tournaments: {
        id: tournamentId,
      },
    },
    relations: ['tournaments', 'teamHome', 'teamAway'],
  });
}


async findByLeague(leagueCode: string): Promise<Matches[]> {
  return this.MatchesRepository.createQueryBuilder('match')
    .leftJoinAndSelect('match.tournaments', 'tournament')
    .leftJoinAndSelect('match.teamHome', 'teamHome')
    .leftJoinAndSelect('match.teamAway', 'teamAway')
    .where("SUBSTRING_INDEX(tournament.idName, '-', 1) = :leagueCode", { leagueCode })
    .getMany();
}

async findByLeagueAndCategory(league: string, category: string): Promise<Matches[]> {
  return this.MatchesRepository.createQueryBuilder('match')
    .leftJoinAndSelect('match.tournaments', 'tournament')
    .leftJoinAndSelect('match.teamHome', 'teamHome')
    .leftJoinAndSelect('match.teamAway', 'teamAway')
    .where(`SUBSTRING_INDEX(tournament.idName, '-', 1) = :league`, { league })
    .andWhere(`SUBSTRING_INDEX(SUBSTRING_INDEX(tournament.idName, '-', 2), '-', -1) = :category`, { category })
    .getMany();
}




async get(id : number):Promise<Matches[]>{
  return this.MatchesRepository.findBy({ id: id });
}

  async create(data : Partial<Matches>): Promise<Matches>{
    return this.MatchesRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.MatchesRepository.delete(id)
   }

    
}