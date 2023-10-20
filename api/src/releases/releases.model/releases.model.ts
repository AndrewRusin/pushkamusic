import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReleasesDocument = HydratedDocument<ReleasesModel>
export enum ReleasesCategory{
    ReleasesClips = "clips",
    ReleasesSongs = "songs"
}
// class ReleasesItem{
//     _id:string;
//     category: ReleasesCategory;
//     title: string;
//     link: string;
//     background: string;
// }
@Schema() 
export class ReleasesModel {
    @Prop({enum:ReleasesCategory})
    category: ReleasesCategory;

    @Prop()
    title: string;

    @Prop()
    link: string;

    @Prop()
    background: string;
}

export const ReleasesShema = SchemaFactory.createForClass(ReleasesModel)  