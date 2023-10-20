import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SongModel, SongShema } from './song.model/song.model';
import { SongService } from './song.service';


@Module({
  controllers: [SongController],
  imports: [MongooseModule.forFeature([{name:SongModel.name, schema:SongShema}])],
  providers: [SongService]
})
export class SongModule {}
