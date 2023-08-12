import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesModule } from './images/images.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sergiodominguez9710:exVssmVqWtXaZ9RP@usuarios.7zi5yj2.mongodb.net/trobbit'), ImagesModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
