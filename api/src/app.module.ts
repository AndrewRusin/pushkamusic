import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { SongModule } from './song/song.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { TopPageModule } from './top-page/top-page.module';
import { FilterModule } from './filter/filter.module';
import { ReleasesModule } from './releases/releases.module';
import { ContactsModule } from './contacts/contacts.module';
import { FilesModule } from './files/files.module';
import { SelectModule } from './select/select.module';

@Module({
	imports: [
			ConfigModule.forRoot(), 
			MongooseModule.forRootAsync({
				imports: [ConfigModule],
				inject: [ConfigService],
				useFactory:getMongoConfig
			 }),
			AuthModule, 
			SongModule, 
			TopPageModule, 
			FilterModule, 
			ReleasesModule, 
			ContactsModule, 
			FilesModule, 
			SelectModule],
})
export class AppModule {}