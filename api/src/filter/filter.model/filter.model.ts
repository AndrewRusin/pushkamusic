import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FilterDocument = HydratedDocument<FilterModel>

export class categoryOptions{
    value:string;

    label:string;
}

@Schema()
export class FilterModel {
  

    @Prop()
    filterItem: string;

    @Prop()
    filterValue: string;

    @Prop()
    category: categoryOptions ;
    
    @Prop({default:0}) // Поле для порядкового номера, начальное значение - 0
    order: number;

}

export const FilterShema = SchemaFactory.createForClass(FilterModel)