import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ChampionsPlayers } from './champions-players.entity';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
//import { Cache } from 'cache-manager';

@Injectable()
export class ChampionsPlayersService {
  constructor(
    @InjectRepository(ChampionsPlayers)
    private readonly ChampionsPlayersRepository: Repository<ChampionsPlayers>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<ChampionsPlayers[]> {
 
   const tournaments = await this.ChampionsPlayersRepository.find({
      relations: ['teams', 'tournaments','participants'] ,
     });
return tournaments
  }
//corregir nombre
  async TournamentsById(id : number, data : Partial<ChampionsPlayers> ) : Promise<UpdateResult> {
    return this.ChampionsPlayersRepository.update(id , data)
  }


async get(id : number):Promise<ChampionsPlayers[]>{
  return this.ChampionsPlayersRepository.findBy({ id: id });
}

  async create(data : Partial<ChampionsPlayers>): Promise<ChampionsPlayers>{
    return this.ChampionsPlayersRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.ChampionsPlayersRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}
