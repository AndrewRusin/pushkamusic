import { Module } from '@nestjs/common';
import { selectController } from './select.controller';
import { selectService } from './select.service';
import { MongooseModule } from '@nestjs/mongoose';
import { selectModel, selectShema } from './select.model/select.model';

@Module({
  controllers: [selectController],
  imports: [MongooseModule.forFeature([{name:selectModel.name, schema:selectShema}])],
  providers: [selectService]
})
export class SelectModule {}
