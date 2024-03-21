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
exports.SelectService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const select_model_1 = require("./select.model/select.model");
let SelectService = exports.SelectService = class SelectService {
    constructor(selectModel) {
        this.selectModel = selectModel;
    }
    async create(dto) {
        return this.selectModel.create(dto);
    }
    async findById(id) {
        return this.selectModel.findById(id).exec();
    }
    async deleteById(id) {
        return this.selectModel.findByIdAndDelete(id).exec();
    }
    async updateById(id, dto) {
        return this.selectModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findAllItems() {
        return this.selectModel.find({}).exec();
    }
    async updateIsHidden() {
        const aDayAgo = new Date();
        aDayAgo.setDate(aDayAgo.getDate() - 1);
        await this.selectModel.updateMany({ createdAt: { $lte: aDayAgo }, isHidden: false }, { $set: { isHidden: true } });
    }
};
__decorate([
    (0, schedule_1.Cron)('0 0 1,15 * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SelectService.prototype, "updateIsHidden", null);
exports.SelectService = SelectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(select_model_1.SelectModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SelectService);
//# sourceMappingURL=select.service.js.map