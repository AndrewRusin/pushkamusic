import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { format } from 'date-fns';
import {ensureDir, remove, writeFile, unlink, readdir} from 'fs-extra'
import { FileElementResponse } from './dto/file-response-element.response';


@Injectable()
export class FilesService {
    async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
        const dateFolder = format(new Date(), 'yyyy-MM-dd');
        const uploadFolder = `${path}/uploads`;

        await ensureDir(uploadFolder);
        const res: FileElementResponse[] = [];
        for(const file of files) {
            const decodeName = decodeURI(file.originalname)
            await writeFile(`${uploadFolder}/${decodeName}`, file.buffer)
           
            const fileName = decodeName.split('.')[0]
            res.push({url: `${decodeName}`, name: fileName})
        }
        return res
    }

    async removeFile(filePath:string){
        try {
            const pathTotal= `${path}/uploads/${filePath}`
            await remove(pathTotal)
            console.log(`Файл ${filePath} успешно удален`);
        } catch (error) {
            console.error(`Ошибка при удалении файла ${filePath}`);
            throw error;
        }
    }

    async deleteFolderIfEmpty(folderPath: string){
        try {
          const folderContents = await readdir(folderPath);
          if (folderContents.length === 0) {
            await remove(folderPath);
          }
        } catch (error) {
          throw new Error('Не удается удалить папку');
        }
      }

}
