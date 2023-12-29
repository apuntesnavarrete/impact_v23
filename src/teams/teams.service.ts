import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teams } from './teams.entity';
import { Repository } from 'typeorm';

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


  //terminar el crud
  //y buscar las buenas practicas del backend y ver que las tenga
}
