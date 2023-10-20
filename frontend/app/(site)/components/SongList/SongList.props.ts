import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ISongCategoriesResponse } from "@/interfaces/song.interface";


export interface SongsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   songs:ISongCategoriesResponse[];
      
}