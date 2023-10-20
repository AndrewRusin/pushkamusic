import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReleasesModel } from './releases.model/releases.model';
import { ReleasesService } from './releases.service';
import { CreateReleaseDto } from './dto/create-release.dto';
import { RELEASE_NOT_FOUND_ERROR } from './releases.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('releases')
export class ReleasesController {

    constructor(private readonly releasesService: ReleasesService){

    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto:CreateReleaseDto) {
        return this.releasesService.create(dto)
    }

    @UsePipes(new ValidationPipe())
    @Get('all')
    async allItems() {
        return this.releasesService.findAllItems();
    }

    @Get(':id')
    async  get(@Param('id') id: string) {
        const release = await this.releasesService.findById(id);
		if (!release) {
			throw new NotFoundException(RELEASE_NOT_FOUND_ERROR)
		}
		return release;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        const deletedRelease = await this.releasesService.deleteById(id);
		if (!deletedRelease) {
			throw new NotFoundException(RELEASE_NOT_FOUND_ERROR)
		}
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ReleasesModel) {
        const updateRelease = await this.releasesService.updateById(id,dto);
		if (!updateRelease) {
			throw new NotFoundException(RELEASE_NOT_FOUND_ERROR)
		}
		return updateRelease;
    }
}
