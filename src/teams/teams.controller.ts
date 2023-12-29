import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Participants } from 'src/participants/participants.entity';

@Controller('teams')
export class TeamsController {

    constructor(private teamService : TeamsService){

        // aqui voy a incluir el servicio
        
    }

//obtener todos los equipos
@Get()

async allTeams(): Promise<Participants[]>{

    try {
        return await this.teamService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

}
