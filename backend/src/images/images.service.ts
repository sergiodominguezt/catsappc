import { Injectable, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map } from 'rxjs';
import { Favourite } from './favourite.interface';

@Injectable()
export class ImagesService {

  constructor(private httpService: HttpService) { }
  async getTenImages(): Promise<any[]> {

    try {
      const response: AxiosResponse = await lastValueFrom(this.httpService.get('https://api.thecatapi.com/v1/images/search?limit=10'));
      const imageMetadata = response.data;
      return imageMetadata;
      // const imagesUrls = response.data.map((image: any) => image.url);
      // return imagesUrls;
    } catch (error) {
      throw new Error('Cannot fetch cat images, please try later');
    }
  }

  async addFavourites(favoriteData: Favourite, apiKey: string): Promise<any> {
    const headerRequest = {
      'x-api-key': apiKey,
    };
    const response = await lastValueFrom(this.httpService.post('https://api.thecatapi.com/v1/favourites', favoriteData, { headers: headerRequest}));
    return response.data;

  }

  async fetchImageMetadata(id: string): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.get(`https://api.thecatapi.com/v1/images/${id}`));
      return response.data;
    } catch (error) {
      throw new Error('Error fetching image metadata');
    }
  }

  async getFavourites( apiKey: string): Promise<any[]> {
    const headers = {
      'x-api-key': apiKey,
    };
    try {
      const response = await lastValueFrom(this.httpService.get('https://api.thecatapi.com/v1/favourites?sub_id=sadt-1091433333', {
        headers
      })
      );
      return response.data;
    } catch (error) {
      throw new Error('Cannot fetch favourites images');
    }
  }

  async deleteFavourites(favoriteId: string, apiKey: string): Promise<void> {
    const headers = {
      'x-api-key': apiKey,
    };

    try {
      await lastValueFrom(this.httpService.delete(`https://api.thecatapi.com/v1/favourites/${favoriteId}`, {
        headers
      })
      );
    } catch (error) {

      console.error(error.response.data);
      
    }

    
  }


}
