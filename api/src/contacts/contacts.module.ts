import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsModel, ContactsShema } from './contacts.model/contacts.model';

@Module({
  controllers: [ContactsController],
  imports: [MongooseModule.forFeature([{name:ContactsModel.name, schema:ContactsShema}])],
  providers: [ContactsService]
})
export class ContactsModule {}
