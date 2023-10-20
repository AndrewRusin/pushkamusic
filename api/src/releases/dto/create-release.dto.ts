import { IsEnum, IsString } from "class-validator";
import { ReleasesCategory } from "../releases.model/releases.model";



export class CreateReleaseDto {

    @IsEnum(ReleasesCategory)
    category: ReleasesCategory;
    
    @IsString()
    title: string;

    @IsString()
    link: string;

    @IsString()
    background: string;
}