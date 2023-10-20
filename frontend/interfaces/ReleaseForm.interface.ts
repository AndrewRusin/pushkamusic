export interface IReleaseForm{
    title:string;
    link: string;
    background:string;
    category: 'songs' | 'clips';
}


export  interface IReleaseCategoriesResponse extends IReleaseForm {
    _id: string;
}