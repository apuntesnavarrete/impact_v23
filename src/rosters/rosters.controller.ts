import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';
import { RostersService } from './rosters.service';
import { Rosters } from './rosters.entity';





@ApiTags('Rosters')
@Controller('Rosters')
export class RostersController {
    constructor(private roustersService : RostersService){
    }

//obtener todos los equipos
@Get()
async allTeams(): Promise<Rosters[]>{

    try {
        return await this.roustersService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Rosters[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.roustersService.get(id)
}


@Get('tournament/:idtorneo')
  async getByTournament(@Param('idtorneo') idtorneo: string) {
    const id = parseInt(idtorneo, 10);
    return this.roustersService.getByTournamentId(id);
  }

@Auth(Role.ADMIN)

@Post()

async create(
    @Body() teamsData:Partial<Rosters>): Promise<Rosters>{

         
        return await  this.roustersService.create(teamsData)
}
@Auth(Role.ADMIN)

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() teamsData:Partial<Rosters>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }



 return this.roustersService.rostersById(id,teamsData)
}
@Auth(Role.ADMIN)
@Delete(':id')
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.roustersService.delete(id)
}


 @Get('upload')
prueba(){
    return "ruta de prueba"
}
}
