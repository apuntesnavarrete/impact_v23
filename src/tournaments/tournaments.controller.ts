import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';
import { TournamentsService } from './tournaments.service';
import { Tournaments } from './tournaments.entity';



@ApiTags('Tournaments')
@Controller('Tournaments')
export class TournamentsController {
    constructor(private tournamentsService : TournamentsService){
    }

//obtener todos los equipos
@Get()
async allTeams(): Promise<Tournaments[]>{

    try {
        return await this.tournamentsService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Tournaments[]>{
    if (isNaN(id)) {
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.tournamentsService.get(id)
}
@Auth(Role.ADMIN)

@Post()

async create(
    @Body() teamsData:Partial<Tournaments>): Promise<Tournaments>{

         console.log(teamsData)
        return await  this.tournamentsService.create(teamsData)
}
@Auth(Role.ADMIN)

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() teamsData:Partial<Tournaments>): Promise <UpdateResult>{
   
   
    if (isNaN(id)) {
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }

 return this.tournamentsService.TournamentsById(id,teamsData)
}
@Auth(Role.ADMIN)
@Delete(':id')
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.tournamentsService.delete(id)
}


@Get('unique-categories/:alias')
async getUniqueCategories(@Param('alias') alias: string): Promise<string[]> {
  try {
    return await this.tournamentsService.getUniqueCategoriesByLeague(alias);
  } catch (error) {
    console.error(error);
    throw new InternalServerErrorException('Error al obtener categorías únicas');
  }
}



}