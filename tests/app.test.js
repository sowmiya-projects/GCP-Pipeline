const request = require('supertest');
const { app, server } = require('../src/app');
afterAll(done => server.close(done));
describe('GET /', () => {
  it('returns 200 with message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from GCP Pipeline-2!');
  });
});
describe('GET /health', () => {
  it('returns healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
