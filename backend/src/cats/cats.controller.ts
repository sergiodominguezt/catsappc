import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cats } from './schemas/cats.schema';

@Controller('')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('cats')
  async findAll(): Promise<Cats[]> {
    return await this.catsService.findAll();
  }

  @Get('cats/:id')
  async findOne(@Param('id') id: string): Promise<Cats> {
    return await this.catsService.findById(id);
  }

  @Post('newCat/add')
  async create(@Body() cat: Cats): Promise<Cats> {
    return await this.catsService.create(cat);
  }


  @Put('cats/:id')
  async update(@Param('id') id: string, @Body() cat: Cats): Promise<Cats> {
    return await this.catsService.update(id, cat);
  }

  @Delete('cats/:id')
  async delete(@Param('id') id: string): Promise<Cats> {
    return await this.catsService.delete(id);
  }


  
}
