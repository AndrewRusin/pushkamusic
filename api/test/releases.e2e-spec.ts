import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from './../src/auth/dto/auth.dto';
import { CreateReleaseDto } from './../src/releases/dto/create-release.dto';
import { ReleasesCategory } from './../src/releases/releases.model/releases.model';


const loginDto: AuthDto = {
	login: 's@gmail.com',
	password: '11'
};
const testDto: CreateReleaseDto ={
    category: ReleasesCategory.ReleasesClips,
    title: '1',
    link: '2',
    background: '3'
}

const testDtoEddited: CreateReleaseDto ={
    category: ReleasesCategory.ReleasesSongs,
    title: '1',
    link: '2',
    background: '3'

}



describe('AppController (e2e)', () => {
    let app: INestApplication;
    let createdId:string;
    let token: string;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();

        const { body } = await request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto);
		token = body.access_token;

    });

    it('/releases/create (POST) - success', async () => {
		return request(app.getHttpServer())
		.post('/releases/create')
        .set('Authorization', 'Bearer ' + token)
        .send(testDto)
        .expect(201)
        .then( ({ body }: request.Response) => { 
            createdId = body._id;
            expect(createdId).toBeDefined();
            
        })
        
	});

     it('/releases/create (POST) - fail',  () => {
	 	return request(app.getHttpServer())
	 	.post('/releases/create')
         .set('Authorization', 'Bearer ' + token)
         .send({...testDto, title:1})
         .expect(400);
	});

    it('/releases/:id (GET) - success', async() => {
        return request(app.getHttpServer())
                .get('/releases/' + createdId)
                .then( ({ body }: request.Response) => { 
                    createdId = body._id;
                    expect(createdId).toBeDefined();
                    
                })
    });

    it('/releases/:id (PATCH) - success', async () => {
		return request(app.getHttpServer())
		.patch('/releases/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .send(testDtoEddited)
        .expect(200)
        .then( ({ body }: request.Response) => { 
            expect(body.category).not.toBe(testDto.category) 
          
           
        })
        
	});
 

    it('/releases/:id (DELETE) - success',  () => {
		return request(app.getHttpServer())
		.delete('/releases/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .expect(200)

        
	});

    it('/releases/:id (DELETE) - fail',  () => {
		return request(app.getHttpServer())
		.delete('/releases/' + new Types.ObjectId().toHexString())
        .set('Authorization', 'Bearer ' + token)
        .expect(404,{
            statusCode:404,
            message:'Релиз с таким ID не найдена',
            error:'Not Found'
        })

        
	});

    afterAll(()=>{
        disconnect();
    })
})