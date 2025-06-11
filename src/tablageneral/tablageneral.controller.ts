
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TablageneralService } from './tablageneral.service';

@Controller('tablageneral')
export class TablageneralController {
  constructor(private readonly tablageneralService: TablageneralService) {}

  @Get()
  getAll() {
    return { message: 'Funciona el endpoint tablageneral!' };
  }

   @Get(':idTorneo')
  getByTorneo(@Param('idTorneo', ParseIntPipe) idTorneo: number) {
    console.log(idTorneo)
    return this.tablageneralService.getByTorneo(idTorneo);
  }
}