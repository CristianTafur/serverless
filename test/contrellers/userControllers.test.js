const request = require('supertest');
const helper = require('../helper');
const app = require('../../server.js');

const api = '/user';
// eslint-disable-next-line no-undef
describe('user:', () => {
  // eslint-disable-next-line no-undef
  beforeAll(async () => {
    try {
      await helper.migrate();
    } catch (error) {
      console.log(error);
    }
    await helper.clear();
  });
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    await helper.clear();
  });
  // eslint-disable-next-line no-undef
  afterAll(async () => {
    await helper.clear();
    await helper.db.destroy();
  });
  // eslint-disable-next-line no-undef
  test('should process steps', (done) => request(app)
    .post(api)
    .send({
      email: 'jua@gmail.com',
      password: '1234',
    })
    .expect(200)
    .end(async (err, res) => {
      if (err) done(err);
      const { body } = res;
      const { id } = body;
      const user = await helper.db('users').where('id', id).select('id', 'fullname', 'date').first();
      console.log(body, user);
      // eslint-disable-next-line no-undef
      expect(JSON.stringify(user)).toBe(JSON.stringify(body));
      done();
    }));
});
