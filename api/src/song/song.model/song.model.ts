import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {now, HydratedDocument, Document } from "mongoose";

export type SongDocument = HydratedDocument<SongModel>

@Schema({ timestamps: true })
export class SongModel extends Document {

	@Prop()
	title: string;
	
	@Prop()
	songsText: string;
	
	@Prop()
	track_link: string;
	
	@Prop([String])
	params: string[];

	@Prop()
    createdAt: Date;
	
	@Prop({ default: 1 }) // Поле для порядкового номера, начальное значение - 0
    order: number;

	@Prop()
	isHidden:boolean;
}

export const SongShema = SchemaFactory.createForClass(SongModel)  