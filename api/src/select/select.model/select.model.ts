import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type selectDocument = HydratedDocument<selectModel>


@Schema() 
export class selectModel {
    @Prop()
    idArray: string[];
}

export const selectShema = SchemaFactory.createForClass(selectModel)  