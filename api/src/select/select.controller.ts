import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SelectService } from './select.service';
import { CreateSelectDto } from './dto/create-select.dto';
import { UpdateSelectDto } from './dto/update-select.dto'; 
import { SELECT_NOT_FOUND_ERROR } from './select.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('select')
export class SelectController {

    constructor(private readonly selectService: SelectService) {}

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto: CreateSelectDto) {
        return this.selectService.create(dto);
    }

    @UsePipes(new ValidationPipe())
    @Get('all')
    async allItems() {
        return this.selectService.findAllItems();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        const select = await this.selectService.findById(id);
        if (!select) {
            throw new NotFoundException(SELECT_NOT_FOUND_ERROR);
        }
        return select;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const deletedSelect = await this.selectService.deleteById(id);
        if (!deletedSelect) {
            throw new NotFoundException(SELECT_NOT_FOUND_ERROR);
        }
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: UpdateSelectDto) { 
        const updatedSelect = await this.selectService.updateById(id, dto);
        if (!updatedSelect) {
            throw new NotFoundException(SELECT_NOT_FOUND_ERROR);
        }
        return updatedSelect;
    }
}
