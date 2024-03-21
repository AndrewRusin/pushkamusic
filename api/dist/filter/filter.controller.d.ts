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
import { FilterModel } from './filter.model/filter.model';
import { FilterService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
export declare class FilterController {
    private readonly filterService;
    constructor(filterService: FilterService);
    create(dto: CreateFilterDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    allItems(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
    delete(id: string): Promise<void>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    patch(id: string, dto: FilterModel): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, FilterModel> & Omit<FilterModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
