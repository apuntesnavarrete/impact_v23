import {  Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, NotFoundException, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { Participants } from './participants.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('participants')
@Controller('participants')
export class ParticipantsController {

    constructor(private participantSevice : ParticipantsService){

    }
//Obtener todos los participantes 
    @Get()
  async allParticipant(){

    try{
      return  this.participantSevice.all();

    }
    catch(error){
      console.error(error);
      throw new InternalServerErrorException('Error al obtener Jugadores');
    }

    }

//crear un nuevo participante
@Auth(Role.ADMIN)

@Post()
@UseInterceptors(FileInterceptor('file' , {

  storage: diskStorage(
      {
        destination: 'public/participants',
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
async createParticipant(
  @UploadedFile() file: Express.Multer.File,

  @Body() participantData: Partial<Participants>): Promise<Participants> {
 
    if (file) {
      console.log(file)
      participantData.Photo = file.filename;
    } //ajuste provisional dependiendo el backend
    console.log(participantData)

    return this.participantSevice.create(participantData);
}



//obtener un participante por su id

 @Get(':id')
 async getParticipant(@Param('id') id:number){

  if (isNaN(id)) {
    // Lanza una excepción BadRequest si 'id' no es un número válido
    throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
  }

    return this.participantSevice.get(id);

 }
//actualizar un participante
@Auth(Role.ADMIN)




 @Put(':id')
 @UseInterceptors(FileInterceptor('file', {
  storage: diskStorage({
    destination: 'public/participants',
    filename: (_, file, callback) => {
      callback(null, file.originalname);
    }
  }),
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return callback(new Error('Invalid format'), false);
    }
    callback(null, true);
  }
}))
 async updateParticipant(
  @Param('id') id: number,
  @UploadedFile() file: Express.Multer.File,
  @Body() data: Partial<Participants>): Promise<UpdateResult> {


const updatedParticipant = await this.participantSevice.update(id, data);
console.log(data)
console.log(file)


if (updatedParticipant.affected === 0) {
    throw new NotFoundException
    (`No fields updated for participant with id ${id} , check you put a valid id`);
  }



  return updatedParticipant
 }
 @Auth(Role.ADMIN)

 @Delete(':id')
 async deleteParticipant(@Param('id') id: number): Promise<DeleteResult> {
  if (isNaN(id)) {
    // Lanza una excepción BadRequest si 'id' no es un número válido
    throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
  }
   return this.participantSevice.delete(id);
 }

 @Post('upload-image')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './public/participants', // Carpeta donde se guardarán las imágenes
      filename: (_, file, callback) => {
        callback(null, file.originalname);
      },
    }),
  }))
  uploadImage(@UploadedFile() image: Express.Multer.File) {
    // Aquí puedes procesar la imagen y realizar operaciones adicionales si es necesario
    return { filename: image.filename };
  }


}
