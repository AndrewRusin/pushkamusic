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
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-page.dto';
import { TopPageDocument, TopPageModel } from './top-page.model/top-page.model';
export declare class TopPageService {
    private topPageModel;
    constructor(topPageModel: Model<TopPageDocument>);
    create(dto: CreateTopPageDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
    deleteById(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    updateById(id: string, dto: CreateTopPageDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, TopPageModel> & Omit<TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
