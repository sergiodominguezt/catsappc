import { Model } from 'mongoose';
import { Cats } from './schemas/cats.schema';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<Cats>);
    findAll(): Promise<Cats[]>;
    create(cat: Cats): Promise<Cats>;
    findById(id: string): Promise<Cats>;
    update(id: string, cat: Cats): Promise<Cats>;
    delete(id: string): Promise<Cats>;
}
