import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Playerstatistics } from './player-statistics.entity';


@Injectable()
export class PlayersStatisticsService {
  constructor(
    @InjectRepository(Playerstatistics)
    private readonly PlayerStatisticsRepository: Repository<Playerstatistics>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Playerstatistics[]> {
 
   const tournaments = await this.PlayerStatisticsRepository.find({
      relations:  ['matches', 'participants', 'teams'] ,
     });
return tournaments
  }
//corregir nombre
  async PlayersStatisticsById(id : number, data : Partial<Playerstatistics> ) : Promise<UpdateResult> {
    return this.PlayerStatisticsRepository.update(id , data)
  }


async get(id : number):Promise<Playerstatistics[]>{
  return this.PlayerStatisticsRepository.findBy({ id: id });
}

  async create(data : Partial<Playerstatistics>): Promise<Playerstatistics>{
    return this.PlayerStatisticsRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.PlayerStatisticsRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}