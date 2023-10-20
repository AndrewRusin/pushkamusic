import { IsEnum, IsString } from "class-validator";
import { TopLevelCategory } from "../top-page.model/top-page.model";


export class CreateTopPageDto {

    @IsEnum(TopLevelCategory)
    category: TopLevelCategory;
    
    @IsString()
    title: string;

    @IsString()
    value: string;
}