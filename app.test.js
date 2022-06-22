import {test,expect} from '@jest/globals';
import request  from 'supertest';
import app from "./app.js"

test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);

});


