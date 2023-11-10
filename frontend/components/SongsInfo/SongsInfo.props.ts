import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SongsInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name:string | null ;
    params:string[] | null;
    text:string | null;
    closeInfo:Function;
    className:string;
}