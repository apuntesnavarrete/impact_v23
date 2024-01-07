import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Categories } from './categories.entity';
export declare class CategoriesService {
    private readonly CategoriesRepository;
    constructor(CategoriesRepository: Repository<Categories>);
    all(): Promise<Categories[]>;
    teamById(id: number, data: Partial<Categories>): Promise<UpdateResult>;
    get(id: number): Promise<Categories[]>;
    create(data: Partial<Categories>): Promise<Categories>;
    delete(id: number): Promise<DeleteResult>;
}
