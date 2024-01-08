import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Santions } from './santions.entity';


@Injectable()
export class SantionsService {
  constructor(
    @InjectRepository(Santions)
    private readonly santionsRepository: Repository<Santions>,
   // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {} 

  async all(): Promise<Santions[]> {
 
   const santions = await this.santionsRepository.find({
      relations:  ['matches', 'participants'] ,
     });
return santions
  }
//corregir nombre
  async santionsById(id : number, data : Partial<Santions> ) : Promise<UpdateResult> {
    return this.santionsRepository.update(id , data)
  }


async get(id : number):Promise<Santions[]>{
  return this.santionsRepository.findBy({ id: id });
}

  async create(data : Partial<Santions>): Promise<Santions>{
    return this.santionsRepository.save(data)
   }

   async delete(id : number):Promise<DeleteResult> {
    return this.santionsRepository.delete(id)
   }

    //modificar todos lo promise any
 
  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}