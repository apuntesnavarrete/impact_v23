import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionsTeams } from 'src/champions-teams/champions-teams.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
//import { Cache } from 'cache-manager';

@Injectable()
export class ChampionsTeamsService {
  constructor(
    @InjectRepository(ChampionsTeams)
    private readonly ChampionsTeamsRepository: Repository<ChampionsTeams>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<ChampionsTeams[]> {
 
   const tournaments = await this.ChampionsTeamsRepository.find({
      relations: ['teams', 'tournaments'] ,
     });
return tournaments
  }
//corregir nombre
  async TournamentsById(id : number, data : Partial<ChampionsTeams> ) : Promise<UpdateResult> {
    return this.ChampionsTeamsRepository.update(id , data)
  }


async get(id : number):Promise<ChampionsTeams[]>{
  return this.ChampionsTeamsRepository.findBy({ id: id });
}

  async create(data : Partial<ChampionsTeams>): Promise<ChampionsTeams>{
    return this.ChampionsTeamsRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.ChampionsTeamsRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}
