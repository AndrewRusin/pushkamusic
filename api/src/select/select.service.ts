import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CreateSelectDto } from './dto/create-select.dto';
import { UpdateSelectDto } from './dto/update-select.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SelectDocument, SelectModel } from './select.model/select.model';


@Injectable()
export class SelectService {

    constructor(
        @InjectModel(SelectModel.name) private selectModel: Model<SelectDocument>,
        
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
    async updateById(id: string, dto: UpdateSelectDto) {
        return this.selectModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findAllItems() {
  
        return this.selectModel.find({}).exec()
    }

    @Cron('0 0 1,15 * *')
    async updateIsHidden() {
      const aDayAgo = new Date();
      aDayAgo.setDate(aDayAgo.getDate() - 1);
    
      await this.selectModel.updateMany(
        { createdAt: { $lte: aDayAgo }, isHidden: false },
        { $set: { isHidden: true } }
      );
    }
}
