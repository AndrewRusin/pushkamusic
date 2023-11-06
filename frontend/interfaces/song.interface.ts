import { Options } from "@/utils/filterCategory";




export interface ISongForm{
    title:string ;
	songsText:string;
	track_link:string ;
	params:string[];
    isHidden:boolean;
}


export  interface ISongCategoriesResponse extends ISongForm {
    _id: string;
    createdAt: Date;
	updatedAt: Date;
	order:number;
	isSelected?:boolean;
}
