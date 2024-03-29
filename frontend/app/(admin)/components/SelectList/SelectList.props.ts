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
    onSelectItem:string[] | null;
    windowTop:number;
    clear: () => void;
    showSelected:() => void;
    onDeleteItem:(id:string) => void; 
    onTrackId:(idx:number) => void; 
    clearAllSelected:() => void; 
}