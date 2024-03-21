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
exports.FilterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const filter_model_1 = require("./filter.model/filter.model");
const mongoose_2 = require("mongoose");
let FilterService = exports.FilterService = class FilterService {
    constructor(filterModel) {
        this.filterModel = filterModel;
    }
    async getLastFilterOrder() {
        const lastSong = await this.filterModel.findOne({}, {}, { sort: { order: -1 } }).exec();
        if (lastSong) {
            return lastSong.order + 1;
        }
        else {
            return 1;
        }
    }
    async create(dto) {
        const order = await this.getLastFilterOrder();
        const songData = { ...dto, order };
        return this.filterModel.create(songData);
    }
    async findById(id) {
        return this.filterModel.findById(id).exec();
    }
    async deleteById(id) {
        return this.filterModel.findByIdAndDelete(id).exec();
    }
    async updateById(id, dto) {
        return this.filterModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findAllItems() {
        return this.filterModel.find({}).exec();
    }
};
exports.FilterService = FilterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(filter_model_1.FilterModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FilterService);
//# sourceMappingURL=filter.service.js.map