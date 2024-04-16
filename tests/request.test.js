const request = require('supertest');

const app = require('../index');

describe('GET /', () => {
  it('responds with Hello World', done => {
    const response = request(app).get('/');
    response.expect('Hello World', done);
    });
});
    
