import { ImagesService } from './images.service';
import { Favourite } from './favourite.interface';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    getTenCats(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    addFavorite(favoriteData: Favourite): Promise<any>;
    getFavourites(): Promise<any[]>;
    deleteFavorite(favoriteId: string): Promise<void>;
}
