import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { selectModel } from './select.model/select.model';
import { selectService } from './select.service';
import { CreateSelectDto } from './dto/create-select.dto';
import { SELECT_NOT_FOUND_ERROR } from './select.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('select')
export class selectController {

    constructor(private readonly selectService: selectService){

    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto:CreateSelectDto) {
        return this.selectService.create(dto)
    }

    @UsePipes(new ValidationPipe())
    @Get('all')
    async allItems() {
        return this.selectService.findAllItems();
    }

    @Get(':id')
    async  get(@Param('id') id: string) {
        const select = await this.selectService.findById(id);
		if (!select) {
			throw new NotFoundException(SELECT_NOT_FOUND_ERROR)
		}
		return select;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        const deletedSelect = await this.selectService.deleteById(id);
		if (!deletedSelect) {
			throw new NotFoundException(SELECT_NOT_FOUND_ERROR)
		}
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: selectModel) {
        const updateSelect = await this.selectService.updateById(id,dto);
		if (!updateSelect) {
			throw new NotFoundException(SELECT_NOT_FOUND_ERROR)
		}
		return updateSelect;
    }
}
