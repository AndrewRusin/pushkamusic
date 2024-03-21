/// <reference types="multer" />
import { FileElementResponse } from './dto/file-response-element.response';
export declare class FilesService {
    saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]>;
    removeFile(filePath: string): Promise<void>;
    deleteFolderIfEmpty(folderPath: string): Promise<void>;
    transliterateFileNames(folderPath: string): Promise<void>;
    listFiles(folderPath: string): Promise<any[]>;
}
