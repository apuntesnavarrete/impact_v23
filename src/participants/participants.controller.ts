import {  Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { Participants } from './participants.entity';

@Controller('participants')
export class ParticipantsController {

    constructor(private participantSevice : ParticipantsService){

    }
//Obtener todos los participantes 
    @Get()
    allParticipant(){
        return  this.participantSevice.all();
    }

//crear un nuevo participante
@Post()
async createParticipant(@Body() participantData: Partial<Participants>): Promise<Participants> {
  return this.participantSevice.create(participantData);
}
//obtener un participante por su id

 @Get(':id')
 async getParticipant(@Param('id') id:number){
    return this.participantSevice.get(id);

 }
//actualizar un participante

 @Put(':id')
 async updateParticipant(@Param('id') id: number, @Body() data: any): Promise<any> {
   return this.participantSevice.update(id, data);
 }
//eliminar un participante

 @Delete(':id')
 async deleteParticipant(@Param('id') id: number): Promise<number> {
   return this.participantSevice.delete(id);
 }

 //BUSCAR JUGADOR POR NOMBRE **eso se hara en el frontend obteniendo todos los participantes y filtrando.
}
