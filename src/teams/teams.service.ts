import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teams } from './teams.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams)
    private readonly TeamsRepository: Repository<Teams>,
  ) {} 

  async all(): Promise<Teams[]> {
    const teams = await this.TeamsRepository.find({
      relations: ['participants'],
    });
    return teams;
  }

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
