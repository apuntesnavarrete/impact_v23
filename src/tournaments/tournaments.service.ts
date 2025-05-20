import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Tournaments } from './tournaments.entity';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
//import { Cache } from 'cache-manager';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournaments)
    private readonly TournamentsRepository: Repository<Tournaments>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Tournaments[]> {
 
   const tournaments = await this.TournamentsRepository.find({
      relations: ['leagues', 'categories'] ,
     });
return tournaments
  }
//corregir nombre
  async TournamentsById(id : number, data : Partial<Tournaments> ) : Promise<UpdateResult> {
    return this.TournamentsRepository.update(id , data)
  }


async get(id : number):Promise<Tournaments[]>{
  return this.TournamentsRepository.findBy({ id: id });
}

  async create(data : Partial<Tournaments>): Promise<Tournaments>{
    return this.TournamentsRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.TournamentsRepository.delete(id)
   }

async getUniqueCategoriesByLeague(aliasLiga: string): Promise<string[]> {
  const tournaments = await this.TournamentsRepository.find({
    relations: ['leagues', 'categories'],
  });

  const categorias = tournaments
    .filter(t => t.leagues?.Alias === aliasLiga)
    .map(t => t.categories?.categorias)
    .filter(c => c); // elimina valores null o undefined

  const unique = [...new Set(categorias)];
  return unique;
}
   

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}
