import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from './../src/auth/dto/auth.dto';
import { createProductDto } from './../src/song/dto/create-product.dto';



const loginDto: AuthDto = {
	login: 's@gmail.com',
	password: '11'
};
const testDto: createProductDto ={
    title: '1',
    songsText: '2',
    track_link: '444',
    params: ['1'],
    price:50
}

const testDtoEddited: createProductDto ={
    title: '1',
    songsText: '2',
    track_link: '33',
    params: ['1'],
    price: 50
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

    it('/song/create (POST) - success', async () => {
		return request(app.getHttpServer())
		.post('/song/create')
        .set('Authorization', 'Bearer ' + token)
        .send(testDto)
        .expect(201)
        .then( ({ body }: request.Response) => { 
            createdId = body._id;
            expect(createdId).toBeDefined();
            
        })
        
	});

     it('/song/create (POST) - fail',  () => {
	 	return request(app.getHttpServer())
	 	.post('/song/create')
         .set('Authorization', 'Bearer ' + token)
         .send({...testDto, price:'40'})
         .expect(400);
	});
    it('/song/all (GET)', () => {
        return request(app.getHttpServer())
        .get('/song/all')
        .expect(200)
       
    });
    it('/song/:id (GET) - success', async() => {
        return request(app.getHttpServer())
                .get('/song/' + createdId)
                .then( ({ body }: request.Response) => { 
                    createdId = body._id;
                    expect(createdId).toBeDefined();
                    
                })
    });

    it('/song/:id (PATCH) - success', async () => {
		return request(app.getHttpServer())
		.patch('/song/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .send({track_link:'iiii'})
        .expect(200)
        .then( ({ body }: request.Response) => { 
        
            expect(body.track_link).not.toBe(testDto.track_link) 
          
           
        })
        
	});
 

    it('/song/:id (DELETE) - success',  () => {
		return request(app.getHttpServer())
		.delete('/song/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .expect(200)

        
	});

    it('/song/:id (DELETE) - fail',  () => {
		return request(app.getHttpServer())
		.delete('/song/' + new Types.ObjectId().toHexString())
        .set('Authorization', 'Bearer ' + token)
        .expect(404,{
            statusCode:404,
            message:'Песня с таким ID не найдена',
            error:'Not Found'
        })

        
	});

    afterAll(()=>{
        disconnect();
    })
})