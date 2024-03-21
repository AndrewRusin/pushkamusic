export interface ISelectCategories {
    idArray:string[],
    isHidden: boolean,
	clientName?: string,
	messenger?: string,
}
export interface ISelectCategoriesResponse extends ISelectCategories{
    _id:string,
	createdAt: string,
	updatedAt: string
}