import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/role.enum';

import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';



@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService : CategoriesService){
    }

@Get()
async allcategories(): Promise<Categories[]>{
    try {
        return await this.categoriesService.all()

    } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('Error al obtener categorias');
    }
}

@Get(':id')
async findTeamById(@Param('id' , ParseIntPipe) id : number): Promise<Categories[]>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
    return this.categoriesService.get(id)
}
@Auth(Role.ADMIN)

@Post()
async create(
    @Body() categoriesData): Promise<Categories>{

      
      console.log(categoriesData)
         
        return await  this.categoriesService.create(categoriesData)
}
@Auth(Role.ADMIN)

@Put(':id')
 async updateTeam(@Param('id') id : number ,@Body() Data:Partial<Categories>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }

 return this.categoriesService.teamById(id,Data)
}
@Auth(Role.ADMIN)
@Delete(':id')
async delete(@Param('id') id :number) : Promise<DeleteResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }
 return this.categoriesService.delete(id)
}


 @Get('upload')
prueba(){
    return "ruta de prueba"
}

}
