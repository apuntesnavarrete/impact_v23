import {  Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, InternalServerErrorException, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { Participants } from './participants.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { User } from 'src/users/entities/user.entity';
import { Role } from 'src/common/role.enum';

@ApiTags('participants')
@Auth(Role.ADMIN)
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
@Post()
async createParticipant(@Body() participantData: Partial<Participants>): Promise<Participants> {
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

 @Put(':id')
 async updateParticipant(@Param('id') id: number, @Body() data: Partial<Participants>): Promise<UpdateResult> {
//  const updatedParticipant = this.participantSevice.update(id, data);
if (isNaN(id)) {
  // Lanza una excepción BadRequest si 'id' no es un número válido
  throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
} 

const updatedParticipant = await this.participantSevice.update(id, data);

  if (updatedParticipant.affected === 0) {
    // Si no se actualiza ningún campo, puedes manejarlo según tus necesidades.
    throw new NotFoundException
    (`No fields updated for participant with id ${id} , check you put a valid id`);
  }

  return updatedParticipant
 }
//eliminar un participante

 @Delete(':id')
 @HttpCode(204)
 async deleteParticipant(@Param('id') id: number): Promise<DeleteResult> {
  if (isNaN(id)) {
    // Lanza una excepción BadRequest si 'id' no es un número válido
    throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
  }
   return this.participantSevice.delete(id);
 }

 //BUSCAR JUGADOR POR NOMBRE **eso se hara en el frontend obteniendo todos los participantes y filtrando.
}
