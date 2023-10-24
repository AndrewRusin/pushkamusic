import { IsDate, IsDateString, IsNumber, IsOptional, IsString, IsBoolean } from "class-validator";

export class createProductDto {
  
   @IsString()
	title: string;
	
    @IsString()
	songsText: string;	
    
    @IsString()
    track_link: string;
	
    @IsString({each:true})
	params: string[];

    createdAt:Date;

    // @IsNumber()
    // order:number
    
    @IsBoolean()
    isHidden:boolean
}