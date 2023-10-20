import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TopPageDocument = HydratedDocument<TopPageModel>


export enum TopLevelCategory{
    Songs = 'songs',
    Releases = 'releases',
    Contacts = 'contacts'
}
@Schema()
export class TopPageModel {
    @Prop({enum: TopLevelCategory})
    category: TopLevelCategory;

    @Prop()
    title: string;
    
    @Prop()
    value: string;
}

export const TopPageShema = SchemaFactory.createForClass(TopPageModel)  
