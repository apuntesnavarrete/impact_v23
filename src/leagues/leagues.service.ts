import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Leagues } from './leagues.entity';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
//import { Cache } from 'cache-manager';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(Leagues)
    private readonly LeaguesRepository: Repository<Leagues>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Leagues[]> {
 
   const league = await this.LeaguesRepository.find({
      relations: ['participants']  });
      console.log(league)
return league
  }
//corregir nombre
  async LeagueById(id : number, data : Partial<Leagues> ) : Promise<UpdateResult> {
    return this.LeaguesRepository.update(id , data)
  }


async get(id : number):Promise<Leagues[]>{
  return this.LeaguesRepository.findBy({ id: id });
}

  async create(data : Partial<Leagues>): Promise<Leagues>{
    return this.LeaguesRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.LeaguesRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}