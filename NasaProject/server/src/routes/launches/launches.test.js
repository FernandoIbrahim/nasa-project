const request = require('supertest');
const app = require('./../../app');

describe('Test GET /lauches', () => {
    test('it Should responde with 200 sucess', async () => {
        const response = await request(app).get('/launches');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test POST /lauch', () => {
    test('it Should responde with 200 sucess', () => {
    });

    test('it should catch missing riquired properties', () => {});
    test('it should catch invalid data', () => {});
});