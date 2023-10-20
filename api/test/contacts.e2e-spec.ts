import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from './../src/auth/dto/auth.dto';
import { CreateContactsDto } from './../src/contacts/dto/create-contacts.dto';

const loginDto: AuthDto = {
	login: 's@gmail.com',
	password: '11'
};
const testDto: CreateContactsDto ={
    phone: '0674047714',
    email:'1@mail.ru',
    socialLinks:[{link:'insta',name:'insta'},{link:'telega',name:'telega'}]

}

const testDtoEddited: CreateContactsDto ={
    phone: '0674047715',
    email:'1@mail.ru',
    socialLinks:[{link:'insta',name:'insta'},{link:'telega',name:'telega'}]

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

    it('/contacts/create (POST) - success', async () => {
		return request(app.getHttpServer())
		.post('/contacts/create')
        .set('Authorization', 'Bearer ' + token)
        .send(testDto)
        .expect(201)
        .then( ({ body }: request.Response) => { 
            createdId = body._id;
            expect(createdId).toBeDefined();
            
        })
        
	});

     it('/contacts/create (POST) - fail',  () => {
	 	return request(app.getHttpServer())
	 	.post('/contacts/create')
         .set('Authorization', 'Bearer ' + token)
         .send({...testDto, phone:5555555555})
         .expect(400);
	});

    it('/contacts/:id (PATCH) - success', async () => {
		return request(app.getHttpServer())
		.patch('/contacts/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .send(testDtoEddited)
        .expect(200)
        .then( ({ body }: request.Response) => { 
            expect(body.phone).not.toBe(testDto.phone) 
          
           
        })
        
	});
 

    it('/contacts/:id (DELETE) - success',  () => {
		return request(app.getHttpServer())
		.delete('/contacts/' + createdId)
        .set('Authorization', 'Bearer ' + token)
        .expect(200)

        
	});

    it('/contacts/:id (DELETE) - fail',  () => {
		return request(app.getHttpServer())
		.delete('/contacts/' + new Types.ObjectId().toHexString())
        .set('Authorization', 'Bearer ' + token)
        .expect(404,{
            statusCode:404,
            message:'Контакт не найден',
            error:'Not Found'
        })

        
	});

    afterAll(()=>{
        disconnect();
    })
})