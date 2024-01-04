import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Participants } from 'src/participants/participants.entity';
import { Teams } from './teams.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from 'src/auth/decorators/auth.decorators';
//import { Role } from 'src/common/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';



@ApiTags('teams')
//@Auth(Role.ADMIN)
@Controller('teams')
export class TeamsController {
    constructor(private teamService : TeamsService){
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

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Teams[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.teamService.get(id)
}

@Post()
@UseInterceptors(FileInterceptor('file' , {

    storage: diskStorage(
        {
            destination: './upload/teams',
            filename: (_, file, callback) => {
                callback(null, file.originalname);
              }
        }
    ),

    fileFilter: (req, file, callback)=>{
                

        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return callback (new Error('invalid format'), false)
        }

        callback(null,true)
      }

} ))

async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() teamsData:Partial<Teams>): Promise<Teams>{
         teamsData.logo = file.filename; //ajuste provisional dependiendo el backend

        return await  this.teamService.create(teamsData)
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
 @Get('upload')
prueba(){
    return "ruta de prueba"
}


//



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

//

}
