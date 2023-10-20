import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from './../src/auth/dto/auth.dto';
import { CreateFilterDto } from './../src/filter/dto/create-filter.dto';


const loginDto: AuthDto = {
	login: 's@gmail.com',
	password: '11'
};
const testDto: CreateFilterDto ={
    filterItem: 'Детские',
    filterValue: 'child',
    category:'12'

}

const testDtoEddited: CreateFilterDto ={
    filterItem: 'Детские',
    filterValue: 'child',
    category:'11'

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

    it('/filter/create (POST) - success', async () => {
		return request(app.getHttpServer())
		.post('/filter/create')
        .set('Authorization', 'Bearer ' + token)
        .send(testDto)
        .expect(201)
        .then( ({ body }: request.Response) => { 
            createdId = body._id;
            expect(createdId).toBeDefined();
            
        })
        
	});

     it('/filter/create (POST) - fail',  () => {
	 	return request(app.getHttpServer())
	 	.post('/filter/create')
         .set('Authorization', 'Bearer ' + token)
         .send({...testDto, category:11})
         .expect(400);
	});

    it('/filter/:id (PATCH) - success', async () => {
		return request(app.getHttpServer())
		.patch('/filter/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .send(testDtoEddited)
        .expect(200)
        .then( ({ body }: request.Response) => { 
            expect(body.category).not.toBe(testDto.category) 
          
           
        })
        
	});
 

    it('/filter/:id (DELETE) - success',  () => {
		return request(app.getHttpServer())
		.delete('/filter/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .expect(200)

        
	});

    it('/filter/:id (DELETE) - fail',  () => {
		return request(app.getHttpServer())
		.delete('/filter/' + new Types.ObjectId().toHexString())
        .set('Authorization', 'Bearer ' + token)
        .expect(404,{
            statusCode:404,
            message:'Категория фильтра с таким ID не найдена',
            error:'Not Found'
        })

        
	});

    afterAll(()=>{
        disconnect();
    })
})