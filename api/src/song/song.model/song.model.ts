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
}

export const SongShema = SchemaFactory.createForClass(SongModel)  