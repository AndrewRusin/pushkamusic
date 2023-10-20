import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {now, HydratedDocument } from "mongoose";

export type SongDocument = HydratedDocument<SongModel>

@Schema({ timestamps: true })
export class SongModel {

	@Prop()
	title: string;
	
	@Prop()
	songsText: string;
	
	@Prop()
	track_link: string;
	
	@Prop([String])
	params: string[];

	@Prop({default: now()})
    createdAt: Date;
}

export const SongShema = SchemaFactory.createForClass(SongModel)  