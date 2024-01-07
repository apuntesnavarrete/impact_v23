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

//obtener todos los equipos
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
 async updateTeam(@Param('id') id : number ,@Body() teamsData:Partial<Categories>): Promise <UpdateResult>{
    if (isNaN(id)) {
        // Lanza una excepción BadRequest si 'id' no es un número válido
        throw new HttpException('El ID proporcionado no es un número válido.', HttpStatus.BAD_REQUEST);
      }



 return this.categoriesService.teamById(id,teamsData)
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
