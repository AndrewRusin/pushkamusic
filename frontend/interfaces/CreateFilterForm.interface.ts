export interface IFilterCategory{
    label:string;
    value:string
}

export interface ICreateFilter{
    filterItem: string;
    filterValue: string;
    category: IFilterCategory;
}

export  interface IFilterCategoriesResponse extends ICreateFilter {
    _id: string;
}
export interface IModernFilter{
    [key:string]:IFilterCategoriesResponse[]
}