import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cats', schema: CatSchema}])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
