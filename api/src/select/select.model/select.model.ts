import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SelectDocument = HydratedDocument<SelectModel>;

@Schema({ timestamps: true }) 
export class SelectModel {
    @Prop({ type: [String], required: true })
    idArray: string[];

    @Prop({ required: true })
    isHidden: boolean;

    @Prop({ required: true })
    clientName: string;

    @Prop({ required: true })
    messenger: string;
}

export const SelectSchema = SchemaFactory.createForClass(SelectModel);
