import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from './../src/auth/dto/auth.dto';
import { CreateTopPageDto } from '../src/top-page/dto/create-page.dto';
import { TopLevelCategory } from './../src/top-page/top-page.model/top-page.model';



const loginDto: AuthDto = {
	login: 's@gmail.com',
	password: '11'
};
const testDto: CreateTopPageDto={
    category: TopLevelCategory.Contacts,
    title: '1',
    value:'3',
}

const testDtoEddited: CreateTopPageDto ={
    category: TopLevelCategory.Releases,
    title: '1',
    value:'4',

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

    it('/top-page/create (POST) - success', async () => {
		return request(app.getHttpServer())
		.post('/top-page/create')
        .set('Authorization', 'Bearer ' + token)
        .send(testDto)
        .expect(201)
        .then( ({ body }: request.Response) => { 
            createdId = body._id;
            expect(createdId).toBeDefined();
            
        })
        
	});

     it('/top-page/create (POST) - fail',  () => {
	 	return request(app.getHttpServer())
	 	.post('/top-page/create')
         .set('Authorization', 'Bearer ' + token)
         .send({...testDto, category: 'video'})
         .expect(400);
	});



    it('/top-page/:id (PATCH) - success', async () => {
		return request(app.getHttpServer())
		.patch('/top-page/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .send(testDtoEddited)
        .expect(200)
        .then( ({ body }: request.Response) => { 
            expect(body.category).not.toBe(testDto.category) 
          
           
        })
        
	});
 

    it('/top-page/:id (DELETE) - success',  () => {
		return request(app.getHttpServer())
		.delete('/top-page/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .expect(200)

        
	});

    it('/top-page/:id (DELETE) - fail',  () => {
		return request(app.getHttpServer())
		.delete('/top-page/' + new Types.ObjectId().toHexString())
        .set('Authorization', 'Bearer ' + token)
        .expect(404,{
            statusCode:404,
            message:'Страница с таким ID не найдена',
            error:'Not Found'
        })

        
	});

    afterAll(()=>{
        disconnect();
    })
})