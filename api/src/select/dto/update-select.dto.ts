import { IsArray, IsBoolean, IsOptional, IsString, ArrayNotEmpty } from "class-validator";

export class UpdateSelectDto {
    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    idArray?: string[];

    @IsOptional()
    @IsBoolean()
    isHidden?: boolean;

    @IsOptional()
    @IsString()
    clientName?: string;

    @IsOptional()
    @IsString()
    messenger?: string;
}
