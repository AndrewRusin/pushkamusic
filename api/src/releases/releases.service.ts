import { Injectable } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReleasesDocument, ReleasesModel } from './releases.model/releases.model';

@Injectable()
export class ReleasesService {

    constructor(
        @InjectModel(ReleasesModel.name) private releasesModel: Model<ReleasesDocument>,
        
    ) {

    }

    async create(dto: CreateReleaseDto) {
        return this.releasesModel.create(dto);
    }

    async findById(id: string) {
        return this.releasesModel.findById(id).exec()
    }

    async deleteById(id: string) {
        return this.releasesModel.findByIdAndDelete(id).exec()
    }
    async updateById(id: string, dto: CreateReleaseDto) {
		return this.releasesModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}
    async findAllItems() {
        return this.releasesModel.find({}).exec()
    }
}
