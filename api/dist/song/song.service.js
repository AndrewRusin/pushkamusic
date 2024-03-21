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
exports.SongService = void 0;
const common_1 = require("@nestjs/common");
const song_model_1 = require("./song.model/song.model");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const transliteration_1 = require("transliteration");
let SongService = exports.SongService = class SongService {
    constructor(songModel) {
        this.songModel = songModel;
    }
    async getLastSongOrder() {
        const lastSong = await this.songModel.findOne({}, {}, { sort: { order: -1 } }).exec();
        if (lastSong) {
            return lastSong.order + 1;
        }
        else {
            return 1;
        }
    }
    async create(dto) {
        const order = await this.getLastSongOrder();
        const songData = { ...dto, createdAt: new Date(), order };
        console.log('songData');
        return this.songModel.create(songData);
    }
    async findById(id) {
        return this.songModel.findById(id).exec();
    }
    async deleteById(id) {
        const deletedSong = await this.songModel.findByIdAndDelete(id).exec();
        if (deletedSong) {
            await this.songModel.updateMany({ order: { $gt: deletedSong.order } }, { $inc: { order: -1 } }).exec();
        }
        return deletedSong;
    }
    async updateById(id, dto) {
        return this.songModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findAllSongs() {
        return this.songModel.find({}).sort({ order: -1 }).exec();
    }
    async findByParameters(param) {
        const filter = {
            'params': { $all: param },
        };
        return this.songModel.find(filter).sort({ order: -1 }).exec();
    }
    async findSongsByIds(idArray) {
        const songs = await this.songModel.find({ _id: { $in: idArray } }).exec();
        const songsById = {};
        songs.forEach(song => {
            songsById[song._id.toString()] = song;
        });
        const sortedSongs = idArray.map(id => songsById[id]).filter(song => song !== undefined);
        return sortedSongs;
    }
    async updateSongOrder(id, newOrder) {
        const songToUpdate = await this.songModel.findById(id).exec();
        const oldOrder = songToUpdate.order;
        const change = newOrder - oldOrder;
        await this.songModel.updateMany({ order: { $gte: Math.min(oldOrder, newOrder), $lte: Math.max(oldOrder, newOrder) } }, { $inc: { order: change } }).exec();
        const updatedSong = await this.songModel.findByIdAndUpdate(id, { order: newOrder }, { new: true }).exec();
        return updatedSong;
    }
    async transliterateTrackLinks() {
        try {
            const songs = await this.songModel.find({}).exec();
            for (const song of songs) {
                const transliteratedTrackLink = (0, transliteration_1.transliterate)(song.track_link);
                if (transliteratedTrackLink !== song.track_link) {
                    song.track_link = transliteratedTrackLink;
                    await song.save();
                    console.log(`track_link для песни с ID ${song.id} был обновлен.`);
                }
            }
        }
        catch (error) {
            console.error('Ошибка при транслитерации track_link:', error);
            throw error;
        }
    }
};
exports.SongService = SongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(song_model_1.SongModel.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SongService);
//# sourceMappingURL=song.service.js.map