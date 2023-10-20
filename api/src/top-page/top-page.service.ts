import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-page.dto';
import { TopPageDocument, TopPageModel } from './top-page.model/top-page.model';

@Injectable()
export class TopPageService {
    constructor(
        @InjectModel(TopPageModel.name) private topPageModel: Model<TopPageDocument>,
        // private readonly jwtService: JwtService,
    ) {

    }

    async create(dto: CreateTopPageDto) {
        return this.topPageModel.create(dto);
    }

    async getAll(){
        return this.topPageModel.find({}).exec()
    }

    async deleteById(id: string) {
        return this.topPageModel.findByIdAndDelete(id).exec()
    }
    async updateById(id: string, dto: CreateTopPageDto) {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

}
