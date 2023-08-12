import { HttpService } from '@nestjs/axios';
import { Favourite } from './favourite.interface';
export declare class ImagesService {
    private httpService;
    constructor(httpService: HttpService);
    getTenImages(): Promise<any[]>;
    addFavourites(favoriteData: Favourite, apiKey: string): Promise<any>;
    fetchImageMetadata(id: string): Promise<any>;
    getFavourites(apiKey: string): Promise<any[]>;
    deleteFavourites(favoriteId: string, apiKey: string): Promise<void>;
}
