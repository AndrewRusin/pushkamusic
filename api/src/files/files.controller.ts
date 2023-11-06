import { Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { FileElementResponse } from './dto/file-response-element.response';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}


    @Post('upload')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('files'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
        return this.filesService.saveFiles([file])
    }

    @Delete(':fileName')
    @UseGuards(JwtAuthGuard)
    async removeFile(@Param('fileName') fileName:string){

        await this.filesService.removeFile(fileName);
		
    }

    @Delete('folder/:folderName')
  async deleteFolderIfEmpty(@Param('folderName') folderName: string) {
    const folderPath = `./uploads/${folderName}`; // Замените на путь к папке, которую вы хотите удалить, если она пуста
    await this.filesService.deleteFolderIfEmpty(folderName)
  }

  @Post('transliterate-filenames')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard) // Это если вам нужна аутентификация
    async transliterateFilenames() {
        await this.filesService.transliterateFileNames('./uploads/'); // Укажите путь к директории с песнями
        return { message: 'Имена файлов были успешно транслитерированы.' };
    }
    @Get('filenames')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard) // Это если вам нужна аутентификация
    async listFilenames() {
        return await this.filesService.listFiles('./uploads/') // Укажите путь к директории с песнями
        
    }
}
