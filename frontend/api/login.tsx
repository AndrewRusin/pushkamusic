import { API } from './api';
import { Login } from '@/interfaces/login.interface';
import { LoginSuccess } from '@/interfaces/loginSuccess.interface';

export async function login(data:Login): Promise<LoginSuccess> {
	const res = await fetch(API.login, {
		method: 'POST',
		headers: new Headers({ 'content-type': 'application/json'}),
		body:JSON.stringify(data)
	});
	return res.json();
}