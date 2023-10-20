
import { IsArray, IsObject, IsString } from "class-validator";
import { categoryOptions } from "../filter.model/filter.model";

export class CreateFilterDto{
  
    @IsString()
    filterItem: string;

    @IsString()
    filterValue: string;


    category: categoryOptions;
    
}