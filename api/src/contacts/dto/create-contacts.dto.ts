import { IsArray, IsNumber,  IsObject,  IsString } from "class-validator";
import { socialLinksCharacteristic } from "../contacts.model/contacts.model";

export class CreateContactsDto {
   

    @IsString()
    phone: string;

    @IsString()
    email: string;

    @IsArray()
    socialLinks: socialLinksCharacteristic[];


}


