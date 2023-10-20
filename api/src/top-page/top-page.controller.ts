import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import { TopPageService } from './top-page.service';
import { CreateTopPageDto } from './dto/create-page.dto';
import { PAGE_NOT_FOUND_ERROR } from './top-page.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('top-page')
export class TopPageController {
    constructor(private readonly pageService:TopPageService){}
    
    @Get('findAll')
    async findAll() {
        return this.pageService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto: CreateTopPageDto) {
        return this.pageService.create(dto)
    }

  
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        const deletedPage = await this.pageService.deleteById(id);
		if (!deletedPage) {
			throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
		}
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
        const updatePage = await this.pageService.updateById(id, dto)
		if (!updatePage) {
			throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
		}
		return updatePage;
    }
}
