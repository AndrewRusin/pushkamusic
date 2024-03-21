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
import { HydratedDocument } from "mongoose";
export type FilterDocument = HydratedDocument<FilterModel>;
export declare class categoryOptions {
    value: string;
    label: string;
}
export declare class FilterModel {
    filterItem: string;
    filterValue: string;
    category: categoryOptions;
    order: number;
}
export declare const FilterShema: import("mongoose").Schema<FilterModel, import("mongoose").Model<FilterModel, any, any, any, import("mongoose").Document<unknown, any, FilterModel> & Omit<FilterModel & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FilterModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FilterModel>> & Omit<import("mongoose").FlatRecord<FilterModel> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
