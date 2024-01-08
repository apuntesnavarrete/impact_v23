import { Categories } from "src/categories/categories.entity";
import { Leagues } from "src/leagues/leagues.entity";
export declare class Tournaments {
    id: number;
    idName: string;
    description: string;
    date_fundation: string;
    leagues: Leagues;
    categories: Categories;
    createdAt: Date;
    updatedAt: Date;
}
