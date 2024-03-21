import { ISelectCategories, ISelectCategoriesResponse } from '@/interfaces/Selects.interface';
import { API } from './api';
import Cookies from 'js-cookie';
const token = `Bearer ${Cookies.get("token")}`;
const headers = { 
	'content-type': 'application/json',
	'Authorization' : token
}

export async function createSelect (data:ISelectCategories):Promise<ISelectCategoriesResponse> {
    const res = await fetch(API.select.create, {
		method: 'POST',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}
export async function patchSelect (data:{idArray:string[]}, id:string):Promise<ISelectCategoriesResponse> {
    const res = await fetch(API.select.deleteOrPatch + id, {
		method: 'PATCH',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}
export async function deleteSelect (id:string){
    const res = await fetch(API.select.deleteOrPatch + id, {
		method: 'DELETE',
		headers,
		
	});
	return ;
}

export async function toggleSelect (id:string, data:{isHidden:boolean} ):Promise<ISelectCategoriesResponse> {
    const res = await fetch(API.select.deleteOrPatch + id, {
		method: 'PATCH',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}

export async function getSelectItems(): Promise<ISelectCategoriesResponse[]> {
	const res = await fetch(API.select.findAll, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});

	return res.json();
}
export async function findSelectItem(id:string): Promise<ISelectCategoriesResponse> {
	const res = await fetch(API.select.deleteOrPatch + id, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});

	return res.json();
}