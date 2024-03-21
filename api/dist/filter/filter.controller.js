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
exports.FilterController = void 0;
const common_1 = require("@nestjs/common");
const filter_model_1 = require("./filter.model/filter.model");
const filter_service_1 = require("./filter.service");
const create_filter_dto_1 = require("./dto/create-filter.dto");
const filter_constants_1 = require("./filter.constants");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let FilterController = exports.FilterController = class FilterController {
    constructor(filterService) {
        this.filterService = filterService;
    }
    async create(dto) {
        return this.filterService.create(dto);
    }
    async allItems() {
        return this.filterService.findAllItems();
    }
    async delete(id) {
        const deletedFilterItem = await this.filterService.deleteById(id);
        if (!deletedFilterItem) {
            throw new common_1.NotFoundException(filter_constants_1.FILTER_NOT_FOUND_ERROR);
        }
    }
    async get(id) {
        const filterItem = await this.filterService.findById(id);
        if (!filterItem) {
            throw new common_1.NotFoundException(filter_constants_1.FILTER_NOT_FOUND_ERROR);
        }
        return filterItem;
    }
    async patch(id, dto) {
        const updateFilterItem = await this.filterService.updateById(id, dto);
        if (!updateFilterItem) {
            throw new common_1.NotFoundException(filter_constants_1.FILTER_NOT_FOUND_ERROR);
        }
        return updateFilterItem;
    }
};
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "allItems", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "get", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, filter_model_1.FilterModel]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "patch", null);
exports.FilterController = FilterController = __decorate([
    (0, common_1.Controller)('filter'),
    __metadata("design:paramtypes", [filter_service_1.FilterService])
], FilterController);
//# sourceMappingURL=filter.controller.js.map