import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Categories } from './categories.entity';


@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly CategoriesRepository: Repository<Categories>,
  ) {} 

  async all(): Promise<Categories[]> {
  
   const categories = await this.CategoriesRepository.find()
return categories
  }
  async teamById(id : number, data : Partial<Categories> ) : Promise<UpdateResult> {
    return this.CategoriesRepository.update(id , data)
  }
async get(id : number):Promise<Categories[]>{
  return this.CategoriesRepository.findBy({ id: id });
}
  async create(data : Partial<Categories>): Promise<Categories>{
    return this.CategoriesRepository.save(data)
   }
   async delete(id : number):Promise<DeleteResult> {
    return this.CategoriesRepository.delete(id)
   }

}
