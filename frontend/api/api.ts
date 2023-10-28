export const API = {
	process:process.env,
	topPage: {
		all: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/findAll'
	},
	login: process.env.NEXT_PUBLIC_DOMAIN + '/api/auth/login',
	filter: {
		create: process.env.NEXT_PUBLIC_DOMAIN + '/api/filter/create',
		findAll:process.env.NEXT_PUBLIC_DOMAIN + '/api/filter/all',
		deleteOrPatch:process.env.NEXT_PUBLIC_DOMAIN + '/api/filter/'
	},
	release:{
		create: process.env.NEXT_PUBLIC_DOMAIN + '/api/releases/create',
		findAll:process.env.NEXT_PUBLIC_DOMAIN + '/api/releases/all',
		deleteOrPatch:process.env.NEXT_PUBLIC_DOMAIN + '/api/releases/'
	},
	song:{
		create: process.env.NEXT_PUBLIC_DOMAIN + '/api/song/create',
		findAll:process.env.NEXT_PUBLIC_DOMAIN + '/api/song/all',
		deleteOrPatch:process.env.NEXT_PUBLIC_DOMAIN + '/api/song/',
		filter:process.env.NEXT_PUBLIC_DOMAIN + '/api/song/filter?params=',
		select:process.env.NEXT_PUBLIC_DOMAIN + '/api/song/select?idArray=',
	},
	uploadFile:process.env.NEXT_PUBLIC_DOMAIN + '/api/files/upload',
	uploadSrc:process.env.NEXT_PUBLIC_DOMAIN +'/static/',
	deleteFile: process.env.NEXT_PUBLIC_DOMAIN + '/api/files/',
	select:{
		create: process.env.NEXT_PUBLIC_DOMAIN + '/api/select/create',
		findAll:process.env.NEXT_PUBLIC_DOMAIN + '/api/select/all',
		deleteOrPatch:process.env.NEXT_PUBLIC_DOMAIN + '/api/select/'
	}
};