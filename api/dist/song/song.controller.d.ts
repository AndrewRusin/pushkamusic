/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { SongModel } from './song.model/song.model';
import { createProductDto } from './dto/create-product.dto';
import { SongService } from './song.service';
export declare class SongController {
    private readonly songService;
    constructor(songService: SongService);
    create(dto: createProductDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    getByParams(params: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findSongsByIds(idArray: string): Promise<any[]>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: createProductDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateSongOrder(id: string, newOrder: number): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, SongModel> & Omit<SongModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    transliterateTrackLinks(): Promise<{
        message: string;
    }>;
}
