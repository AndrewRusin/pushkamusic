import { Module } from '@nestjs/common';
import { TopPageService } from './top-page.service';
import { TopPageController } from './top-page.controller';
import { TopPageModel, TopPageShema } from './top-page.model/top-page.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [TopPageService],
  imports: [MongooseModule.forFeature([{name:TopPageModel.name, schema:TopPageShema}])],
  controllers: [TopPageController]
})
export class TopPageModule {}
