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
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CatsService = exports.CatsService = class CatsService {
    constructor(catModel) {
        this.catModel = catModel;
    }
    async findAll() {
        return await this.catModel.find().exec();
    }
    async create(cat) {
        const newCat = new this.catModel(cat);
        return await newCat.save();
    }
    async findById(id) {
        return await this.catModel.findById(id).exec();
    }
    async update(id, cat) {
        return await this.catModel.findByIdAndUpdate(id, cat, { new: true });
    }
    async delete(id) {
        return await this.catModel.findByIdAndRemove(id);
    }
};
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Cats')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CatsService);
//# sourceMappingURL=cats.service.js.map