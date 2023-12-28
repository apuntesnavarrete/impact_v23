import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participants } from './participants.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantsService {
    constructor(
        @InjectRepository(Participants) private readonly participantRepository: Repository<Participants>) {
            
        }
    

        async all(): Promise<Participants[]> {
            return this.participantRepository.find();
        }
/*
       async create(data): Promise<Participants>{
        return this.participantRepository.save(data)
       }
*/

async create(participantData: Partial<Participants>): Promise<Participants> {
    const newParticipant = this.participantRepository.create(participantData);
    return await this.participantRepository.save(newParticipant);
  }

  async get(id : number){
  const buscar = this.participantRepository.findBy({id:id})
    return buscar
  //  return this.participantRepository.findOne({id})

  }

async update(id:number, data):Promise<any>{
    return this.participantRepository.update(id,data)
}

  async delete(id:number):Promise<any>{
    return this.participantRepository.delete(id)
  }
}
