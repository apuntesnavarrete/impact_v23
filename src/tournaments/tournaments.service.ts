import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Like, Repository, UpdateResult } from 'typeorm';
import { Tournaments } from './tournaments.entity';


@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournaments)
    private readonly TournamentsRepository: Repository<Tournaments>,
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

async getTournamentsByLeague(aliasLiga: string): Promise<Tournaments[]> {
  return this.TournamentsRepository.find({
    where: {
      leagues: { Alias: aliasLiga }
    },
    relations: ['leagues', 'categories']
  });
}

async getTournamentsByLeagueAndCategory(liga: string, categoria: string): Promise<Tournaments[]> {
   return this.TournamentsRepository.find({
    where: {
      leagues: { Alias: liga },
      categories: { categorias: Like(`%${categoria}%`) } // busca coincidencias parciales
    },
    relations: ['leagues', 'categories'],
  });
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


  async create(data : Partial<Tournaments>): Promise<Tournaments>{
    return this.TournamentsRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.TournamentsRepository.delete(id)
   }


   
}
