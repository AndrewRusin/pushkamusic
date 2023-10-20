import { API } from './api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.all, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
		
	});
	
	return res.json();
}