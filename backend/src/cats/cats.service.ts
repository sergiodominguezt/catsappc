import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Model } from 'mongoose';
import { Cats } from './schemas/cats.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel('Cats')
    private readonly catModel: Model<Cats>) {}
  

    async findAll(): Promise<Cats[]> {
      return await this.catModel.find().exec();
    }

    async create(cat: Cats): Promise<Cats> {
      const newCat = new this.catModel(cat);
      return await newCat.save();
    }

    async findById(id: string): Promise<Cats> {
      return await this.catModel.findById(id).exec();
    }

    async update(id: string, cat: Cats): Promise<Cats> {
      return await this.catModel.findByIdAndUpdate(id, cat, { new: true });
    }

    async delete(id: string): Promise<Cats> {
      return await this.catModel.findByIdAndRemove(id);
    }
}
