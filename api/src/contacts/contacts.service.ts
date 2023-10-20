import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactsModel, ContactsDocument } from './contacts.model/contacts.model';
import { CreateContactsDto } from './dto/create-contacts.dto';

@Injectable()
export class ContactsService {
    constructor(
        @InjectModel(ContactsModel.name) private сontactsModel: Model<ContactsDocument>,
    ) {

    }

    async create(dto: CreateContactsDto) {
        return this.сontactsModel.create(dto);
    }



    async deleteById(id: string) {
        return this.сontactsModel.findByIdAndDelete(id).exec()
    }
    async updateById(id: string, dto: CreateContactsDto) {
		return this.сontactsModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}
}
