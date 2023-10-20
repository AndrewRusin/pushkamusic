import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { FilterModel } from './filter.model/filter.model';
import { FilterService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { FILTER_NOT_FOUND_ERROR } from './filter.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('filter')
export class FilterController {
    constructor(private readonly filterService: FilterService){

    }
    @UsePipes(new ValidationPipe())
    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() dto: CreateFilterDto) {
        return this.filterService.create(dto)
    }

    @UsePipes(new ValidationPipe())
    @Get('all')
    async allItems() {
        return this.filterService.findAllItems()
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        const deletedFilterItem = await this.filterService.deleteById(id);
        if (!deletedFilterItem) {
            throw new NotFoundException(FILTER_NOT_FOUND_ERROR )
        }
    }


    @Get(':id')
	async get(@Param('id') id: string) {
		const filterItem = await this.filterService.findById(id);
		if (!filterItem) {
			throw new NotFoundException(FILTER_NOT_FOUND_ERROR)
		}
		return filterItem;
	}


    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: FilterModel) {
        const updateFilterItem = await this.filterService.updateById(id, dto)
    
    if (!updateFilterItem) {
        throw new NotFoundException(FILTER_NOT_FOUND_ERROR )
    }
    return updateFilterItem;
    }
    
    
}
