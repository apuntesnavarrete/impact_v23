import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PlayersStandout } from './players-standout.entity';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
//import { Cache } from 'cache-manager';

@Injectable()
export class PlayersStandoutService {
  constructor(
    @InjectRepository(PlayersStandout)
    private readonly PlayersStandoutRepository: Repository<PlayersStandout>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<PlayersStandout[]> {
 
   const tournaments = await this.PlayersStandoutRepository.find({
      relations: ['teams', 'tournaments', 'participants'] ,
     });
return tournaments
  }
//corregir nombre
  async TournamentsById(id : number, data : Partial<PlayersStandout> ) : Promise<UpdateResult> {
    return this.PlayersStandoutRepository.update(id , data)
  }


async get(id : number):Promise<PlayersStandout[]>{
  return this.PlayersStandoutRepository.findBy({ id: id });
}

  async create(data : Partial<PlayersStandout>): Promise<PlayersStandout>{
    return this.PlayersStandoutRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.PlayersStandoutRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}
