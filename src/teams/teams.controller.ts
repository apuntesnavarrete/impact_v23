import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Participants } from 'src/participants/participants.entity';
import { Teams } from './teams.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('teams')
export class TeamsController {
    constructor(private teamService : TeamsService){
    }

//obtener todos los equipos
@Get()
@HttpCode(204)
async allTeams(): Promise<Participants[]>{

    try {
        return await this.teamService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Teams[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.teamService.get(id)
}

@Post()
async create(@Body() teamsData:Partial<Teams>): Promise<Teams>{
    return  this.teamService.create(teamsData)
}

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() teamsData:Partial<Teams>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.teamService.teamById(id,teamsData)
}

@Delete(':id')
@HttpCode(204)
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.teamService.delete(id)
}

 //modificar todos lo promise any

}
