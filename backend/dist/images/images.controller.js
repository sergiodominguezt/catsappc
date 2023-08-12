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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const images_service_1 = require("./images.service");
const apiKey = 'f221c99b-304d-4404-b111-cbd3ddccf31a';
let ImagesController = exports.ImagesController = class ImagesController {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async getTenCats() {
        return this.imagesService.getTenImages();
    }
    async findOne(id) {
        const imageMetadata = await this.imagesService.fetchImageMetadata(id);
        return imageMetadata;
    }
    async addFavorite(favoriteData) {
        return this.imagesService.addFavourites(favoriteData, apiKey);
    }
    async getFavourites() {
        return this.imagesService.getFavourites(apiKey);
    }
    async deleteFavorite(favoriteId) {
        const apiKey = 'f221c99b-304d-4404-b111-cbd3ddccf31a';
        return this.imagesService.deleteFavourites(favoriteId, apiKey);
    }
};
__decorate([
    (0, common_1.Get)('images'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getTenCats", null);
__decorate([
    (0, common_1.Get)('images/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('favourite/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "addFavorite", null);
__decorate([
    (0, common_1.Get)('favourites'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getFavourites", null);
__decorate([
    (0, common_1.Delete)('favourites/delete/:id'),
    __param(0, (0, common_1.Param)('favoriteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteFavorite", null);
exports.ImagesController = ImagesController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
//# sourceMappingURL=images.controller.js.map