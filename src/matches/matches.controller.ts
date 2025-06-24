import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';
import { MatchesService } from './matches.service';
import { Matches } from './matches.entity';



@ApiTags('Matches')
@Controller('Matches')
export class MatchesController {
    constructor(private matchesService : MatchesService){
    }

//obtener todos los equipos
@Get()
async allTeams(): Promise<Matches[]>{

    try {
        return await this.matchesService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Matches[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.matchesService.get(id)
}

  @Get('tournament/:id')
  getMatchesByTournament(@Param('id') id: string) {
    return this.matchesService.findByTournamentId(+id);
  }


  @Get('league/:liga')
getMatchesByLeague(@Param('liga') liga: string) {
  return this.matchesService.findByLeague(liga);
}

@Get('league/:league/category/:category')
getMatchesByLeagueAndCategory(
  @Param('league') league: string,
  @Param('category') category: string
) {
  return this.matchesService.findByLeagueAndCategory(league, category);
}


@Auth(Role.ADMIN)

@Post()

async create(
    @Body() teamsData:Partial<Matches>): Promise<Matches>{

         
        return await  this.matchesService.create(teamsData)
}
@Auth(Role.ADMIN)

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() Data:Partial<Matches>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }



 return this.matchesService.MatchesById(id,Data)
}
@Auth(Role.ADMIN)
@Delete(':id')
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.matchesService.delete(id)
}

 //modificar todos lo promise any

 @Get('upload')
prueba(){
    return "ruta de prueba"
}



}