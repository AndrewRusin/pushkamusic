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
exports.SelectController = void 0;
const common_1 = require("@nestjs/common");
const select_service_1 = require("./select.service");
const create_select_dto_1 = require("./dto/create-select.dto");
const update_select_dto_1 = require("./dto/update-select.dto");
const select_constants_1 = require("./select.constants");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let SelectController = exports.SelectController = class SelectController {
    constructor(selectService) {
        this.selectService = selectService;
    }
    async create(dto) {
        return this.selectService.create(dto);
    }
    async allItems() {
        return this.selectService.findAllItems();
    }
    async get(id) {
        const select = await this.selectService.findById(id);
        if (!select) {
            throw new common_1.NotFoundException(select_constants_1.SELECT_NOT_FOUND_ERROR);
        }
        return select;
    }
    async delete(id) {
        const deletedSelect = await this.selectService.deleteById(id);
        if (!deletedSelect) {
            throw new common_1.NotFoundException(select_constants_1.SELECT_NOT_FOUND_ERROR);
        }
    }
    async patch(id, dto) {
        const updatedSelect = await this.selectService.updateById(id, dto);
        if (!updatedSelect) {
            throw new common_1.NotFoundException(select_constants_1.SELECT_NOT_FOUND_ERROR);
        }
        return updatedSelect;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_select_dto_1.CreateSelectDto]),
    __metadata("design:returntype", Promise)
], SelectController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SelectController.prototype, "allItems", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SelectController.prototype, "get", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SelectController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_select_dto_1.UpdateSelectDto]),
    __metadata("design:returntype", Promise)
], SelectController.prototype, "patch", null);
exports.SelectController = SelectController = __decorate([
    (0, common_1.Controller)('select'),
    __metadata("design:paramtypes", [select_service_1.SelectService])
], SelectController);
//# sourceMappingURL=select.controller.js.map