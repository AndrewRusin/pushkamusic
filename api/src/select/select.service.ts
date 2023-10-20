import { Injectable } from '@nestjs/common';
import { CreateSelectDto } from './dto/create-select.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { selectDocument, selectModel } from './select.model/select.model';

@Injectable()
export class selectService {

    constructor(
        @InjectModel(selectModel.name) private selectModel: Model<selectDocument>,
        
    ) {

    }

    async create(dto: CreateSelectDto) {
        return this.selectModel.create(dto);
    }

    async findById(id: string) {
        return this.selectModel.findById(id).exec()
    }

    async deleteById(id: string) {
        return this.selectModel.findByIdAndDelete(id).exec()
    }
    async updateById(id: string, dto: CreateSelectDto) {
		return this.selectModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}
    async findAllItems() {
        return this.selectModel.find({}).exec()
    }
}
