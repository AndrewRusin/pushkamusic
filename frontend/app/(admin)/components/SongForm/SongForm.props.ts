import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SongFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    idItem:string;
}