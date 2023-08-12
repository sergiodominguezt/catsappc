"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let ImagesService = exports.ImagesService = class ImagesService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getTenImages() {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get('https://api.thecatapi.com/v1/images/search?limit=10'));
            const imageMetadata = response.data;
            return imageMetadata;
        }
        catch (error) {
            throw new Error('Cannot fetch cat images, please try later');
        }
    }
    async addFavourites(favoriteData, apiKey) {
        const headerRequest = {
            'x-api-key': apiKey,
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.post('https://api.thecatapi.com/v1/favourites', favoriteData, { headers: headerRequest }));
        return response.data;
    }
    async fetchImageMetadata(id) {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`https://api.thecatapi.com/v1/images/${id}`));
            return response.data;
        }
        catch (error) {
            throw new Error('Error fetching image metadata');
        }
    }
    async getFavourites(apiKey) {
        const headers = {
            'x-api-key': apiKey,
        };
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get('https://api.thecatapi.com/v1/favourites?sub_id=sadt-1091433333', {
                headers
            }));
            return response.data;
        }
        catch (error) {
            throw new Error('Cannot fetch favourites images');
        }
    }
    async deleteFavourites(favoriteId, apiKey) {
        const headers = {
            'x-api-key': apiKey,
        };
        try {
            await (0, rxjs_1.lastValueFrom)(this.httpService.delete(`https://api.thecatapi.com/v1/favourites/${favoriteId}`, {
                headers
            }));
        }
        catch (error) {
            console.error(error.response.data);
        }
    }
};
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ImagesService);
//# sourceMappingURL=images.service.js.map