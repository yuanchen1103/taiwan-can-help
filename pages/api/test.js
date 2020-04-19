import nextConnect from 'next-connect';
import mongo from '../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const doc = await req.db.collection('test').findOne();
  res.json(doc);
});

export default handler;
