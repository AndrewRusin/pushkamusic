import { IsArray, ArrayNotEmpty, IsBoolean, IsString } from "class-validator";

export class CreateSelectDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    idArray: string[];

    @IsBoolean()
    isHidden: boolean;

    @IsString()
    // @Length(min, max) // Если нужно, добавьте ограничения
    clientName: string;

    @IsString()
    // @Matches(pattern) // Если есть специфический паттерн для валидации
    messenger: string;

}