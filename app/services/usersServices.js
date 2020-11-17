const usersServices = module.exports;

const usersRepository = require('../repository/usersRepository');
const httpClient = require('../utils/HttpClient');

usersServices.findAll = async () => {
  const { ip } = await httpClient.get('https://api.ipify.org?format=json');

  return { message: `hola onichan uwu <3! la ip del servidor es: ${ip}` };
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
