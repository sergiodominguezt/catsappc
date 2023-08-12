import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { HttpService } from '@nestjs/axios';
import { HttpModule} from '@nestjs/axios'


@Module({
  imports: [HttpModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
