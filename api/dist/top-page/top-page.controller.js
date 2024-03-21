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
exports.TopPageController = void 0;
const common_1 = require("@nestjs/common");
const top_page_model_1 = require("./top-page.model/top-page.model");
const top_page_service_1 = require("./top-page.service");
const create_page_dto_1 = require("./dto/create-page.dto");
const top_page_constants_1 = require("./top-page.constants");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let TopPageController = exports.TopPageController = class TopPageController {
    constructor(pageService) {
        this.pageService = pageService;
    }
    async findAll() {
        return this.pageService.getAll();
    }
    async create(dto) {
        return this.pageService.create(dto);
    }
    async delete(id) {
        const deletedPage = await this.pageService.deleteById(id);
        if (!deletedPage) {
            throw new common_1.NotFoundException(top_page_constants_1.PAGE_NOT_FOUND_ERROR);
        }
    }
    async patch(id, dto) {
        const updatePage = await this.pageService.updateById(id, dto);
        if (!updatePage) {
            throw new common_1.NotFoundException(top_page_constants_1.PAGE_NOT_FOUND_ERROR);
        }
        return updatePage;
    }
};
__decorate([
    (0, common_1.Get)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_page_dto_1.CreateTopPageDto]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, top_page_model_1.TopPageModel]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "patch", null);
exports.TopPageController = TopPageController = __decorate([
    (0, common_1.Controller)('top-page'),
    __metadata("design:paramtypes", [top_page_service_1.TopPageService])
], TopPageController);
//# sourceMappingURL=top-page.controller.js.map