import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { format } from 'date-fns';
import {ensureDir, remove, writeFile, unlink, readdir, rename} from 'fs-extra'
import { FileElementResponse } from './dto/file-response-element.response';
import { transliterate as tr } from 'transliteration';


@Injectable()
export class FilesService {
  async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
  
    const uploadFolder = `${path}/uploads`;


    const res: FileElementResponse[] = [];
    for (const file of files) {
        // Оригинальное имя файла без изменений
        const originalName = file.originalname;
        // Транслитерация для использования в URL
        
        const decodeName = decodeURI(file.originalname)
        const transliteratedName = tr(decodeName);
        // Сохранение файла с транслитерированным именем
        await writeFile(`${uploadFolder}/${transliteratedName}`, file.buffer);
       
        // Получение имени файла без расширения для свойства name
        const fileName = decodeName.split('.')[0]
        // Добавление объекта в ответ, с транслитерированным url и оригинальным name
        res.push({ url: `${transliteratedName}`, name: fileName });
    }
    return res;
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

      async transliterateFileNames(folderPath: string): Promise<void> {
        try {
            const files = await readdir(folderPath);
            for (const file of files) {
                const transliteratedName = tr(file);
                if (transliteratedName !== file) { // Проверяем, нужно ли переименовывать
                    await rename(`${folderPath}/${file}`, `${folderPath}/${transliteratedName}`);
                    console.log(`Файл ${file} был переименован в ${transliteratedName}`);
                }
            }
        } catch (error) {
            console.error('Ошибка при переименовании файлов:', error);
            throw error;
        }
    }

    async listFiles(folderPath: string) {
        try {
            const files = await readdir(folderPath);
            const updateFiles = [];
            files.forEach(el => {
                updateFiles.push({value:el, label:el})
               });
            return updateFiles;
        } catch (error) {
            console.error('Ошибка при переименовании файлов:', error);
            throw error;
        }
    }
}
