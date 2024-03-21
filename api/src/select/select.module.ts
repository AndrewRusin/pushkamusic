import { Module } from '@nestjs/common';
import { SelectController } from './select.controller';
import { SelectService } from './select.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { SelectModel, SelectSchema } from './select.model/select.model';

@Module({
  controllers: [SelectController],
  imports: [
    MongooseModule.forFeature([{name:SelectModel.name, schema:SelectSchema}]),
    ScheduleModule.forRoot(),
  ],
  providers: [SelectService]
})
export class SelectModule {}
