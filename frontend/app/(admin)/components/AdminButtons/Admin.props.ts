import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface AdminButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string;
    link:string;
   
}