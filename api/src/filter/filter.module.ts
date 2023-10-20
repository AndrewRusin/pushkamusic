import { Module } from '@nestjs/common';
import { FilterController } from './filter.controller';
import { FilterService } from './filter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FilterModel, FilterShema } from './filter.model/filter.model';

@Module({
  controllers: [FilterController],
  imports: [MongooseModule.forFeature([{name: FilterModel.name, schema: FilterShema}])],
  providers: [FilterService]
})
export class FilterModule {}
