import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterDocument, FilterModel } from './filter.model/filter.model';
import { Model } from 'mongoose';
import { CreateFilterDto } from './dto/create-filter.dto';


@Injectable()
export class FilterService {
    constructor(
        @InjectModel(FilterModel.name) private filterModel: Model<FilterDocument>
    ) {
     
    }

    async create(dto: CreateFilterDto) {
        return this.filterModel.create(dto);
    }

    async findById(id: string) {
        return this.filterModel.findById(id).exec()
    }

    async deleteById(id: string) {
        return this.filterModel.findByIdAndDelete(id).exec()
    }
    async updateById(id: string, dto: CreateFilterDto) {
        return this.filterModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    
    async findAllItems() {
        return this.filterModel.find({}).exec()
    }
}
