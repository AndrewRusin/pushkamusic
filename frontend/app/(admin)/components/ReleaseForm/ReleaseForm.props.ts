import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ReleaseFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    idItem:string;
}