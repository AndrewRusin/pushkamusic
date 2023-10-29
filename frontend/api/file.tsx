import { IUploadFile } from "@/interfaces/uploadFile.interface";
import { API } from './api';
import Cookies from 'js-cookie';

const token = `Bearer ${Cookies.get("token")}`;
const headers = { 
	
	'Authorization' : token
}

export async function uploadFile( file: FormData): Promise<IUploadFile[]> {
	const res = await fetch(API.uploadFile, {
		method: 'POST',
		headers,
		body:file
	});

	return res.json();
}

export async function deleteFile (fileName:string):Promise<void> {
	await fetch(API.deleteFile + fileName, {
		method:'DELETE',
		headers,
	})
}