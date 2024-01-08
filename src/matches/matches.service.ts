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


async get(id : number):Promise<Matches[]>{
  return this.MatchesRepository.findBy({ id: id });
}

  async create(data : Partial<Matches>): Promise<Matches>{
    return this.MatchesRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.MatchesRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}