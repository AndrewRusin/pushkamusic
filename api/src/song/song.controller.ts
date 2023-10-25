import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseArrayPipe, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SongModel } from './song.model/song.model';
import { createProductDto } from './dto/create-product.dto';
import { SongService } from './song.service';
import { SONG_NOT_FOUND_ERROR } from './song.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('song')
export class SongController {
	constructor(private readonly songService: SongService) {}

	@UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto:createProductDto) {
		return this.songService.create(dto)
	}

	@Get('all')
	async getAll() {
		return  this.songService.findAllSongs()
	}
	
	@Get('filter')
	async getByParams(@Query('params') params: string) {
		try {
			const parsedParams = params.split(',').map(param => param.trim());
			return this.songService.findByParameters(parsedParams);
		  } catch (error) {
			// Обработка ошибки, если параметры не удалось разобрать
			throw new BadRequestException('Invalid parameters format');
		  }
	}

	@Get('select')
	async findSongsByIds(@Query('idArray') idArray: string) {
		const ids = idArray.split(',').map(id => id.trim());
		return this.songService.findSongsByIds(ids);
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		const song = await this.songService.findById(id);
		if (!song) {
			throw new NotFoundException(SONG_NOT_FOUND_ERROR)
		}
		return song;
	}


	@UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedSong = await this.songService.deleteById(id);
		if (!deletedSong) {
			throw new NotFoundException(SONG_NOT_FOUND_ERROR)
		}
	}


	@UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: createProductDto) {
    const updatedSong = await this.songService.updateById(id, dto);
    if (!updatedSong) {
        throw new NotFoundException(SONG_NOT_FOUND_ERROR);
    }
    return updatedSong;
}
	
	@UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
	@Put('updateOrder/:id')
    async updateSongOrder(@Param('id') id: string, @Body('order') newOrder: number) {
        return this.songService.updateSongOrder(id, newOrder);
    }
}


