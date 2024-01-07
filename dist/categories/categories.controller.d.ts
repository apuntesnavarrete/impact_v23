import { DeleteResult, UpdateResult } from 'typeorm';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    allcategories(): Promise<Categories[]>;
    findTeamById(id: number): Promise<Categories[]>;
    create(categoriesData: any): Promise<Categories>;
    updateTeam(id: number, teamsData: Partial<Categories>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    prueba(): string;
}
