import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participants } from './participants.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ParticipantsService {
    constructor(
        @InjectRepository(Participants) private readonly participantRepository: Repository<Participants>) {
            
        }
    

        async all(): Promise<Participants[]> {
            return this.participantRepository.find();
        }


async create(participantData: Partial<Participants>): Promise<Participants> {
    const newParticipant = this.participantRepository.create(participantData);
    return await this.participantRepository.save(newParticipant);
  }

  async get(id : number): Promise<Participants[]>{
  const buscar = this.participantRepository.findBy({id:id})
    return buscar
  //  return this.participantRepository.findOne({id})

  }

async update(id:number, data: Partial<Participants>):Promise<UpdateResult>{
    return this.participantRepository.update(id,data)
}

  async delete(id:number):Promise<DeleteResult>{
    return this.participantRepository.delete(id)
  }

   //modificar todos lo promise any

}

//que me regrese en la actualizacion el id modificado.