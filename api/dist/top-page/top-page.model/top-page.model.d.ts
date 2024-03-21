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
export type TopPageDocument = HydratedDocument<TopPageModel>;
export declare enum TopLevelCategory {
    Songs = "songs",
    Releases = "releases",
    Contacts = "contacts"
}
export declare class TopPageModel {
    category: TopLevelCategory;
    title: string;
    value: string;
}
export declare const TopPageShema: import("mongoose").Schema<TopPageModel, import("mongoose").Model<TopPageModel, any, any, any, import("mongoose").Document<unknown, any, TopPageModel> & Omit<TopPageModel & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TopPageModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TopPageModel>> & Omit<import("mongoose").FlatRecord<TopPageModel> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
