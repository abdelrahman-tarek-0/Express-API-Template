const supertest = require('supertest');
const app = require('../index.js');

const request = supertest(app);

describe('Test basic endpoint', () => {
    it('main route test', async () => {
        const response = await request.get('/');
        expect(response.body).toEqual({message: 'welcome back :)'});
        expect(response.status).toBe(200);
    });
    it('api route test', async () => {
        const response = await request.get('/api');
        expect(response.body).toEqual({message: 'main api route'});
        expect(response.status).toBe(200);
    });
    it('name route test', async () => {
        const response = await request.get('/api/name');
        expect(response.body).toEqual({message: 'name api route'})
        expect(response.status).toBe(200);
    });
})