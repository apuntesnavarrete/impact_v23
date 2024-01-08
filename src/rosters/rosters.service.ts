import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Rosters } from './rosters.entity';


@Injectable()
export class RostersService {
  constructor(
    @InjectRepository(Rosters)
    private readonly RostersRepository: Repository<Rosters>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Rosters[]> {
 
   const tournaments = await this.RostersRepository.find({
      relations:  ['tournaments', 'participants', 'teams'] ,
     });
return tournaments
  }
//corregir nombre
  async rostersById(id : number, data : Partial<Rosters> ) : Promise<UpdateResult> {
    return this.RostersRepository.update(id , data)
  }


async get(id : number):Promise<Rosters[]>{
  return this.RostersRepository.findBy({ id: id });
}

  async create(data : Partial<Rosters>): Promise<Rosters>{
    return this.RostersRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.RostersRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}