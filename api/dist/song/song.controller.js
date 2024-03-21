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
exports.SongController = void 0;
const common_1 = require("@nestjs/common");
const create_product_dto_1 = require("./dto/create-product.dto");
const song_service_1 = require("./song.service");
const song_constants_1 = require("./song.constants");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let SongController = exports.SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    async create(dto) {
        return this.songService.create(dto);
    }
    async getAll() {
        return this.songService.findAllSongs();
    }
    async getByParams(params) {
        try {
            const parsedParams = params.split(',').map(param => param.trim());
            return this.songService.findByParameters(parsedParams);
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid parameters format');
        }
    }
    async findSongsByIds(idArray) {
        const ids = idArray.split(',').map(id => id.trim());
        return this.songService.findSongsByIds(ids);
    }
    async get(id) {
        const song = await this.songService.findById(id);
        if (!song) {
            throw new common_1.NotFoundException(song_constants_1.SONG_NOT_FOUND_ERROR);
        }
        return song;
    }
    async delete(id) {
        const deletedSong = await this.songService.deleteById(id);
        if (!deletedSong) {
            throw new common_1.NotFoundException(song_constants_1.SONG_NOT_FOUND_ERROR);
        }
    }
    async patch(id, dto) {
        const updatedSong = await this.songService.updateById(id, dto);
        if (!updatedSong) {
            throw new common_1.NotFoundException(song_constants_1.SONG_NOT_FOUND_ERROR);
        }
        return updatedSong;
    }
    async updateSongOrder(id, newOrder) {
        return this.songService.updateSongOrder(id, newOrder);
    }
    async transliterateTrackLinks() {
        await this.songService.transliterateTrackLinks();
        return { message: 'Ссылки треков были успешно обновлены.' };
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.createProductDto]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SongController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)('params')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "getByParams", null);
__decorate([
    (0, common_1.Get)('select'),
    __param(0, (0, common_1.Query)('idArray')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "findSongsByIds", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "get", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_product_dto_1.createProductDto]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "patch", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)('updateOrder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "updateSongOrder", null);
__decorate([
    (0, common_1.Post)('transliterate-track-links'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SongController.prototype, "transliterateTrackLinks", null);
exports.SongController = SongController = __decorate([
    (0, common_1.Controller)('song'),
    __metadata("design:paramtypes", [song_service_1.SongService])
], SongController);
//# sourceMappingURL=song.controller.js.map