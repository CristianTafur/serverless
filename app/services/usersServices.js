const usersServices = module.exports;

const usersRepository = require('../repository/usersRepository');
const httpClient = require('../utils/HttpClient');

usersServices.findAll = async () => {
  // const users = await usersRepository.findAll();
  const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
  } = process.env;

  return {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
  };
};

usersServices.create = async (body) => {
  const [user] = await usersRepository.create(body);

  return user;
};

usersServices.createMovement = async (body) => {
  try {
    // eslint-disable-next-line max-len
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRlIjoiTGF2ZWxvIFB1ZXMiLCJpYXQiOjE1MTYyMzkwMjJ9.x1j98MUNL2_SbtUpLiseRh41vDev3StgNfluWgguU44';

    const resp = await httpClient.post('http://lp.siewin.com:8080/api/v1/contabilidad?mod=demo',
      body, { Authorization: token });
    console.log({ resp });

    return { status: resp.statusCode, body: resp.body };
  } catch (err) {
    console.log({ estoEsUnError: err });
    const { statusCode, error } = err;

    return { status: statusCode, body: error };
  }
};
