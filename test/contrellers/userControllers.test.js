const chai = require('chai');
const chaiHttp = require('chai-http');
const helper = require('../helper');
const app = require('../../app.js');

chai.use(chaiHttp);

const api = '/user';
// eslint-disable-next-line no-undef
describe('user:', () => {
  // eslint-disable-next-line no-undef
  beforeAll(async () => {
    await helper.migrate();
    await helper.clear();
  });
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    helper.clear();
  });
  // eslint-disable-next-line no-undef
  test('should process steps', () => chai.request(app).post(api).send({
    email: 'jua@gmail.com',
    password: '1234',
  }).then((res) => {
    const { body } = res;
    // eslint-disable-next-line no-undef
    console.log(body);
    // eslint-disable-next-line no-undef
    expect(typeof body).toBe(typeof {});
  })
    .catch((err) => {
      console.log(err);
    }));
});
