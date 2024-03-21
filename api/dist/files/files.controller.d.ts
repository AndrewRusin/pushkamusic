/// <reference types="multer" />
import { FileElementResponse } from './dto/file-response-element.response';
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File): Promise<FileElementResponse[]>;
    removeFile(fileName: string): Promise<void>;
    deleteFolderIfEmpty(folderName: string): Promise<void>;
    transliterateFilenames(): Promise<{
        message: string;
    }>;
    listFilenames(): Promise<any[]>;
}
