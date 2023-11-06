import { IUploadFile } from "@/interfaces/uploadFile.interface";
import { API } from './api';
import Cookies from 'js-cookie';
import { Options } from "@/utils/filterCategory";

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
export async function allFilesName():Promise<Options[]>{
	const res = await fetch(API.allFilesName, {
			method:'GET',
			headers,
		})
		return res.json();
}