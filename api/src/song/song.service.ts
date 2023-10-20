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

    async create(dto:createProductDto) {
        return this.songModel.create(dto);
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
        return this.songModel.find({}).exec()
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
}
