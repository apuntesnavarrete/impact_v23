import {  Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { Participants } from './participants.entity';

@Controller('participants')
export class ParticipantsController {

    constructor(private participantSevice : ParticipantsService){

    }

    @Get()
    allParticipant(){
        return  this.participantSevice.all();
    }


@Post()
async createParticipant(@Body() participantData: Partial<Participants>): Promise<Participants> {
  return this.participantSevice.create(participantData);
}

 @Get(':id')
 async getParticipant(@Param('id') id:number){
    return this.participantSevice.get(id);

 }

 @Put(':id')
 async updateParticipant(@Param('id') id: number, @Body() data: any): Promise<any> {
   return this.participantSevice.update(id, data);
 }

 @Delete(':id')
 async deleteParticipant(@Param('id') id: number): Promise<number> {
   return this.participantSevice.delete(id);
 }

 //BUSCAR JUGADOR POR NOMBRE
}
