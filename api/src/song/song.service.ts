import { Injectable } from '@nestjs/common';
import { SongDocument, SongModel } from './song.model/song.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createProductDto } from './dto/create-product.dto';

@Injectable()
export class SongService {
    constructor(
        @InjectModel(SongModel.name) private songModel: Model<SongDocument>,
        // private readonly jwtService: JwtService,
    ) {

    }

    async getLastSongOrder(): Promise<number> {
        const lastSong = await this.songModel.findOne({}, {}, { sort: { order: -1 } }).exec();

        if (lastSong) {
            return lastSong.order + 1;
        } else {
            return 1; // Если коллекция пуста, начнем с 1
        }
    }

    async create(dto:createProductDto) {
        const order = await this.getLastSongOrder();
        const songData = { ...dto, createdAt: new Date(), order }; 
        return this.songModel.create(songData);
    }

    async findById(id: string) {
        return this.songModel.findById(id).exec()
    }

    async deleteById(id: string) {
        return this.songModel.findByIdAndDelete(id).exec()
    }
    async updateById(id: string, dto: createProductDto) {
		return this.songModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

    async findAllSongs() {
        return this.songModel.find({}).sort({ order: 1 }).exec();
    }

    async findByParameters(param:string[]) {
        const filter = {
            'params': { $all: param },
          };
        return this.songModel.find(filter).exec()
    }
    async findSongsByIds(idArray: string[]) {
        return this.songModel.find({ _id: { $in: idArray } }).exec();
      }

      async updateSongOrder(id: string, newOrder: number){
        return this.songModel.findByIdAndUpdate(id, { order: newOrder }, { new: true }).exec();
        // Изменение порядкового номера песни по её ID
    }  
}
