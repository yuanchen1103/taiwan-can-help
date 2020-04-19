import nextConnect from 'next-connect';
import redisClient from '../../middlewares/redis';

const handler = nextConnect();

handler.use(redisClient);

const interactionKey = process.env.NODE_ENV === 'production'
  ? 'prod-interaction'
  : 'test-interaction';

handler.get(async (req, res) => {
  const val = await req.redisGet(interactionKey);
  res.json({
    value: parseInt(val, 10) || 0,
  });
});

handler.post(async (req, res) => {
  const val = await req.redisGet(interactionKey);
  const setValue = val ? parseInt(val, 10) + 1 : 1;
  await req.redisSet(interactionKey, setValue);
  res.json({
    message: 'success',
    value: setValue,
  });
});

export default handler;
