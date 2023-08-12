import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagesService } from './images.service';
import axios from 'axios';
import { Favourite } from './favourite.interface';

const apiKey = 'f221c99b-304d-4404-b111-cbd3ddccf31a';

@Controller('')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get('images')
  async getTenCats(): Promise<any[]> {
    return this.imagesService.getTenImages();
    
  }

  @Get('images/:id')
  async findOne(@Param('id') id: string): Promise<any> {
    const imageMetadata = await this.imagesService.fetchImageMetadata(id);
    return imageMetadata;
  }

  @Post('favourite/add')
  async addFavorite(@Body() favoriteData: Favourite): Promise<any> {
    
    return this.imagesService.addFavourites(favoriteData, apiKey);
  }

  @Get('favourites')
  async getFavourites(): Promise<any[]> {
    
    return this.imagesService.getFavourites(apiKey);
  }

  @Delete('favourites/delete/:id')
  async deleteFavorite(@Param('favoriteId') favoriteId: string): Promise<void> {
    const apiKey = 'f221c99b-304d-4404-b111-cbd3ddccf31a';
    return this.imagesService.deleteFavourites(favoriteId, apiKey);
  }
}
