

export interface ISongForm{
    title:string;
	songsText:string;
	track_link:string;
	params:string[];
    
}


export  interface ISongCategoriesResponse extends ISongForm {
    _id: string;
    createdAt: Date;
	updatedAt: Date;
	isSelected?:boolean;
}
