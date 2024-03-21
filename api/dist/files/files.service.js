"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const app_root_path_1 = require("app-root-path");
const fs_extra_1 = require("fs-extra");
const transliteration_1 = require("transliteration");
let FilesService = exports.FilesService = class FilesService {
    async saveFiles(files) {
        const uploadFolder = `${app_root_path_1.path}/uploads`;
        const res = [];
        for (const file of files) {
            const originalName = file.originalname;
            const decodeName = decodeURI(file.originalname);
            const transliteratedName = (0, transliteration_1.transliterate)(decodeName);
            await (0, fs_extra_1.writeFile)(`${uploadFolder}/${transliteratedName}`, file.buffer);
            const fileName = decodeName.split('.')[0];
            res.push({ url: `${transliteratedName}`, name: fileName });
        }
        return res;
    }
    async removeFile(filePath) {
        try {
            const pathTotal = `${app_root_path_1.path}/uploads/${filePath}`;
            await (0, fs_extra_1.remove)(pathTotal);
            console.log(`Файл ${filePath} успешно удален`);
        }
        catch (error) {
            console.error(`Ошибка при удалении файла ${filePath}`);
            throw error;
        }
    }
    async deleteFolderIfEmpty(folderPath) {
        try {
            const folderContents = await (0, fs_extra_1.readdir)(folderPath);
            if (folderContents.length === 0) {
                await (0, fs_extra_1.remove)(folderPath);
            }
        }
        catch (error) {
            throw new Error('Не удается удалить папку');
        }
    }
    async transliterateFileNames(folderPath) {
        try {
            const files = await (0, fs_extra_1.readdir)(folderPath);
            for (const file of files) {
                const transliteratedName = (0, transliteration_1.transliterate)(file);
                if (transliteratedName !== file) {
                    await (0, fs_extra_1.rename)(`${folderPath}/${file}`, `${folderPath}/${transliteratedName}`);
                    console.log(`Файл ${file} был переименован в ${transliteratedName}`);
                }
            }
        }
        catch (error) {
            console.error('Ошибка при переименовании файлов:', error);
            throw error;
        }
    }
    async listFiles(folderPath) {
        try {
            const files = await (0, fs_extra_1.readdir)(folderPath);
            const updateFiles = [];
            files.forEach(el => {
                updateFiles.push({ value: el, label: el });
            });
            return updateFiles;
        }
        catch (error) {
            console.error('Ошибка при переименовании файлов:', error);
            throw error;
        }
    }
};
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
//# sourceMappingURL=files.service.js.map