import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ContactsDocument = HydratedDocument<ContactsModel>

export class socialLinksCharacteristic{ 
    link:string;

    name:string;
}

@Schema()
export class ContactsModel {

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop([socialLinksCharacteristic])
    socialLinks: socialLinksCharacteristic[];
}

export const ContactsShema = SchemaFactory.createForClass(ContactsModel)  
