import { IReleaseForm, IReleaseCategoriesResponse } from '@/interfaces/ReleaseForm.interface';
import { API } from './api';
import Cookies from 'js-cookie';
const token = `Bearer ${Cookies.get("token")}`;
const headers = { 
	'content-type': 'application/json',
	'Authorization' : token
}

export async function createReleaseItems(data:IReleaseForm): Promise<IReleaseCategoriesResponse> {
	const res = await fetch(API.release.create, {
		method: 'POST',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}


export async function patchReleaseItems(data: IReleaseForm, id: string): Promise<IReleaseCategoriesResponse> {
	const res = await fetch(API.release.deleteOrPatch + id, {
		method: 'PATCH',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}

export async function findReleaseItem( id: string): Promise<IReleaseCategoriesResponse> {
	const res = await fetch(API.release.deleteOrPatch + id, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}

export async function deleteReleaseItem( id: string) {
	const res = await fetch(API.release.deleteOrPatch + id, {
		method: 'DELETE',
		headers
		
	});
	return ;
}

export async function getReleaseItems(): Promise<IReleaseCategoriesResponse[]> {
	const res = await fetch(API.release.findAll, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});
	
	return res.json();
}