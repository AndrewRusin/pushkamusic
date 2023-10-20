import {  IsString } from "class-validator";

export class CreateSelectDto {
    @IsString({each:true})
    idArray: string[];
}