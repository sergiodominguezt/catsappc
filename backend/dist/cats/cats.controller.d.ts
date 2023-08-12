import { CatsService } from './cats.service';
import { Cats } from './schemas/cats.schema';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<Cats[]>;
    findOne(id: string): Promise<Cats>;
    create(cat: Cats): Promise<Cats>;
    update(id: string, cat: Cats): Promise<Cats>;
    delete(id: string): Promise<Cats>;
}
