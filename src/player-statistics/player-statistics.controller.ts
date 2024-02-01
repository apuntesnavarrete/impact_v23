import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';
import { PlayersStatisticsService } from './player-statistics.service';
import { Playerstatistics } from './player-statistics.entity';




@ApiTags('PlayerStatistics')
@Controller('PlayerStatistics')
export class PlayersStatisticsController {
    constructor(private playersStatisticsService : PlayersStatisticsService){
    }

//obtener todos los equipos
@Get()
async allTeams(): Promise<Playerstatistics[]>{

    try {
        return await this.playersStatisticsService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Playerstatistics[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.playersStatisticsService.get(id)
}
/*
@Auth(Role.ADMIN)

@Post()

async create(
    @Body() teamsData:Partial<Playerstatistics>): Promise<Playerstatistics>{

         
        return await  this.playersStatisticsService.create(teamsData)
}
*/

//proteger ruta stadisticas
@Post()
async create(@Body() teamsData: Partial<Playerstatistics>[]): Promise<Partial<Playerstatistics>[]> {
    return await this.playersStatisticsService.create(teamsData);
}

@Auth(Role.ADMIN)

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() teamsData:Partial<Playerstatistics>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }



 return this.playersStatisticsService.PlayersStatisticsById(id,teamsData)
}
@Auth(Role.ADMIN)
@Delete(':id')
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.playersStatisticsService.delete(id)
}

 //modificar todos lo promise any

 @Get('upload')
prueba(){
    return "ruta de prueba"
}
}