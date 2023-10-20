import { ISongForm, ISongCategoriesResponse } from '@/interfaces/song.interface';
import { API } from './api';
import Cookies from 'js-cookie';
const token = `Bearer ${Cookies.get("token")}`;
const headers = { 
	'content-type': 'application/json',
	'Authorization' : token
}

export async function createSongItems(data:ISongForm): Promise<ISongCategoriesResponse> {

  
	const res = await fetch(API.song.create, {
		method: 'POST',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}


export async function patchSongItems(data: ISongForm, id: string): Promise<ISongCategoriesResponse> {
	const res = await fetch(API.song.deleteOrPatch + id, {
		method: 'PATCH',
		headers,
		body:JSON.stringify(data)
	});
	return res.json();
}

export async function findSongItem( id: string): Promise<ISongCategoriesResponse> {
	const res = await fetch(API.song.deleteOrPatch + id, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}

export async function deleteSongItem( id: string) {
	const res = await fetch(API.song.deleteOrPatch + id, {
		method: 'DELETE',
		headers
		
	});
	return ;
}

export async function getSongItems(): Promise<ISongCategoriesResponse[]> {
	const res = await fetch(API.song.findAll, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});

	return res.json();
}
export async function getSongItemsFilter(arr:string[] ): Promise<ISongCategoriesResponse[]> {
	const res = await fetch(API.song.filter + arr.toString(), {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});
	
	return res.json();
}
export async function getSongItemsSelect(arr:string[] ): Promise<ISongCategoriesResponse[]> {
	
	const res = await fetch(API.song.select + arr.toString(), {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});
	
	return res.json();
}