import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Santions } from './santions.entity';
export declare class SantionsService {
    private readonly santionsRepository;
    constructor(santionsRepository: Repository<Santions>);
    all(): Promise<Santions[]>;
    santionsById(id: number, data: Partial<Santions>): Promise<UpdateResult>;
    get(id: number): Promise<Santions[]>;
    create(data: Partial<Santions>): Promise<Santions>;
    delete(id: number): Promise<DeleteResult>;
}
