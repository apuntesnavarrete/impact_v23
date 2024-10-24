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
@Auth(Role.ADMIN)

@Post()
async create(
    @Body() teamsData: Partial<Rosters> | Partial<Rosters>[]): Promise<Rosters | Rosters[]> {

    if (Array.isArray(teamsData)) {
        // Si es un array, guarda cada jugador
      console.log(teamsData)
        const savedPlayers = await Promise.all(teamsData.map(player => this.roustersService.create(player)));
        return savedPlayers; // Devuelve todos los jugadores creados
    } else {
        // Si es un solo jugador
        return await this.roustersService.create(teamsData);
    }
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

 //modificar todos lo promise any

 @Get('upload')
prueba(){
    return "ruta de prueba"
}
}
