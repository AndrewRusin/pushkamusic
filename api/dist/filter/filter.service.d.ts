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
/// <reference types="mongoose/types/inferschematype" />
import { FilterDocument, FilterModel } from './filter.model/filter.model';
import { Model } from 'mongoose';
import { CreateFilterDto } from './dto/create-filter.dto';
export declare class FilterService {
    private filterModel;
    constructor(filterModel: Model<FilterDocument>);
    getLastFilterOrder(): Promise<number>;
    create(dto: CreateFilterDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    deleteById(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    updateById(id: string, dto: CreateFilterDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    findAllItems(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
}
