import { ICreateFilter, IFilterCategoriesResponse, IModernFilter } from '@/interfaces/CreateFilterForm.interface';
import { API } from './api';
import Cookies from 'js-cookie';
const token = `Bearer ${Cookies.get("token")}`;
const headers = { 
	'content-type': 'application/json',
	'Authorization' : token
}

export async function createFilterItems(data:ICreateFilter): Promise<IFilterCategoriesResponse> {
	const res = await fetch(API.filter.create, {
		method: 'POST',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}


export async function patchFilterItems(data: ICreateFilter, id: string): Promise<IFilterCategoriesResponse> {
	const res = await fetch(API.filter.deleteOrPatch + id, {
		method: 'PATCH',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}

export async function findFilterItem( id: string): Promise<IFilterCategoriesResponse> {
	console.log(API.filter)
	const res = await fetch(API.filter.deleteOrPatch + id, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}

export async function deleteFilterItem( id: string) {
	const res = await fetch(API.filter.deleteOrPatch + id, {
		method: 'DELETE',
		headers
		
	});
	return ;
}

export async function getFilterItems(): Promise<IFilterCategoriesResponse[]> {
	const res = await fetch(API.filter.findAll, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});
	
	return res.json();
}


export async function getFilterItemsModify(): Promise<IModernFilter> {
	const res = await fetch(API.filter.findAll, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});
	
	 

	let category: string[] = [];
	let obj:IModernFilter = {};
	const params:IFilterCategoriesResponse[] = await res.json();

	params.forEach( (el: { category: { label: string; }; }) => {
	  category.push(el.category.label)
	})
	category = [...new Set(category)]
	category.forEach(el=>{
	  obj[el] = params.filter((item)=>item.category.label===el)
	  
	})

	return obj;
}