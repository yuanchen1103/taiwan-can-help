const { promisify } = require('util');
const redis = require('redis');

const redisHost = 'redis-17436.c1.asia-northeast1-1.gce.cloud.redislabs.com';
const redisPort = 17436;
const redisAuth = 'hGkucBuPjEyUZRjlX0Gm657UR2eWAn9B';


export default async function redisClient(req, res, next) {
  const client = redis.createClient({
    port: redisPort,
    host: redisHost,
  });
  const authAsync = promisify(client.auth).bind(client);
  await authAsync(redisAuth);
  const getAsync = promisify(client.get).bind(client);
  const setAsync = promisify(client.set).bind(client);

  req.redisGet = getAsync;
  req.redisSet = setAsync;

  console.log('redis connected');

  return next();
}
