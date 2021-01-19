import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/api/collection/').expect(404);
  });


  describe('::POST /collect', () => {
    it('responds with success', function (done) {
      request(app.getHttpServer())
      .post('/collect')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
  
  it('responds with error', function (done) {
    request(app.getHttpServer())
      .post('/collect')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404, done);
  });

  });

  describe('::POST /airtime', () => {
    it('responds with success', function (done) {
      request(app.getHttpServer())
        .post('/airtime')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    });
    
    it('responds with error', function (done) {
      request(app.getHttpServer())
        .post('/airtime')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404, done);
    });
  
    });

    describe('::POST mfa/authorize', () => {
      it('responds with success', function (done) {
        request(app.getHttpServer())
          .post('mfa/authorize')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(200, done);
      });
      it('responds with error', function (done) {
        request(app.getHttpServer())
          .post('mfa/authorize')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(404, done);
      });
    
      });

      describe('::POST mfa/verify', () => {
        it('responds with success', function (done) {
          request(app.getHttpServer())
            .post('mfa/verify')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
        });
        
        it('responds with error', function (done) {
          request(app.getHttpServer())
            .post('mfa/verify')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404, done);
        });
      
        });


});
