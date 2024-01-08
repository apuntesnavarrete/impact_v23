import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';
import { ChampionsTeamsService } from './champions-teams.service';
import { ChampionsTeams } from './champions-teams.entity';




@ApiTags('ChampionsTeams')
@Controller('ChampionsTeams')
export class ChampionsTeamsController {
    constructor(private championsTeamsService : ChampionsTeamsService){
    }

//obtener todos los equipos
@Get()
async allTeams(): Promise<ChampionsTeams[]>{

    try {
        return await this.championsTeamsService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener equipos');
    }

}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<ChampionsTeams[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.championsTeamsService.get(id)
}
@Auth(Role.ADMIN)

@Post()

async create(
    @Body() teamsData:Partial<ChampionsTeams>): Promise<ChampionsTeams>{

         
        return await  this.championsTeamsService.create(teamsData)
}
@Auth(Role.ADMIN)

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() teamsData:Partial<ChampionsTeams>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }



 return this.championsTeamsService.TournamentsById(id,teamsData)
}
@Auth(Role.ADMIN)
@Delete(':id')
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.championsTeamsService.delete(id)
}

 //modificar todos lo promise any

 @Get('upload')
prueba(){
    return "ruta de prueba"
}


//

/*

 @Post('upload')
@UseInterceptors(FileInterceptor('file' , {

    storage: diskStorage(
        {
            destination: './upload',
            filename: (_, file, callback) => {
                callback(null, file.originalname);
              }}
    ),
              fileFilter: (req, file, callback)=>{
                

                if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
                    return callback (new Error('invalid format'), false)
                }

                callback(null,true)
              }
} ))
async uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file.filename); //logica despues de que se haya subido el archivo
}
*/
//

}