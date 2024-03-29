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
export type ReleasesDocument = HydratedDocument<ReleasesModel>;
export declare enum ReleasesCategory {
    ReleasesClips = "clips",
    ReleasesSongs = "songs"
}
export declare class ReleasesModel {
    category: ReleasesCategory;
    title: string;
    link: string;
    background: string;
}
export declare const ReleasesShema: import("mongoose").Schema<ReleasesModel, import("mongoose").Model<ReleasesModel, any, any, any, import("mongoose").Document<unknown, any, ReleasesModel> & Omit<ReleasesModel & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReleasesModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ReleasesModel>> & Omit<import("mongoose").FlatRecord<ReleasesModel> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
