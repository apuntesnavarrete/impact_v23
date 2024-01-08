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