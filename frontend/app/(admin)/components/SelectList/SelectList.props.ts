import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ISelectItems{
    name:string;
    id:string;
}
export interface ISelectResponse {
    idArray:string[],
    _id:string
}
export interface selectItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    selectItem:ISelectItems
    deleteSelected: (id: string) => void;
      
}