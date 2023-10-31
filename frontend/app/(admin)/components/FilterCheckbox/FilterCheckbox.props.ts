import { IModernFilter } from "@/interfaces/CreateFilterForm.interface";
import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface FilterCheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    filterItems: IModernFilter | null;
    filterChecked:string[];
}