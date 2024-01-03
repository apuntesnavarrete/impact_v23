import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teams } from './teams.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams)
    private readonly TeamsRepository: Repository<Teams>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Teams[]> {
    const key = 'teams-find-all';
    let teams = await this.cacheManager.get<Teams[]>(key);
  
    if (!teams) {
      console.log('Data not found in cache. Fetching from source.');
  
      teams = await this.TeamsRepository.find({
        relations: ['participants'],
      });
  
      await this.cacheManager.set(key, teams,  6000 * 10 ); // 10000 milliseconds = 10 seconds
  
      console.log('Storing data in cache.');
    } else {
      console.log('Returning cached data.');
    }
  
    return teams;
  }
//corregir nombre
  async teamById(id : number, data : Partial<Teams> ) : Promise<UpdateResult> {
    return this.TeamsRepository.update(id , data)
  }


async get(id : number):Promise<Teams[]>{
  return this.TeamsRepository.findBy({ id: id });
}

  async create(data : Partial<Teams>): Promise<Teams>{
    return this.TeamsRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.TeamsRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}
