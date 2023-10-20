import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactsModel } from './contacts.model/contacts.model';
import { ContactsService } from './contacts.service';
import { CreateContactsDto } from './dto/create-contacts.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService:ContactsService){}

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto: CreateContactsDto) {
        return this.contactsService.create(dto)
    }

 
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        const deletedContacts = await this.contactsService.deleteById(id);
		if (!deletedContacts) {
			throw new NotFoundException('Контакт не найден')
		}
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ContactsModel) {
        const updateContacts = await this.contactsService.updateById(id, dto)
		if (!updateContacts) {
			throw new NotFoundException('Контакт не найден')
		}
		return updateContacts;
    }

}
