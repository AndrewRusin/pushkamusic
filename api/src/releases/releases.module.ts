import { Module } from '@nestjs/common';
import { ReleasesController } from './releases.controller';
import { ReleasesService } from './releases.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReleasesModel, ReleasesShema } from './releases.model/releases.model';

@Module({
  controllers: [ReleasesController],
  imports: [MongooseModule.forFeature([{name:ReleasesModel.name, schema:ReleasesShema}])],
  providers: [ReleasesService]
})
export class ReleasesModule {}
