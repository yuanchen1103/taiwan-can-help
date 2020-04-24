import nextConnect from 'next-connect';
import mongo from '../../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const lang = req.headers['accept-language'];
  if (!['zh-TW', 'en-US'].includes(lang)) return res.json({ govAssetList: [] });
  const filter = { _id: 0 };
  filter[lang] = 1;
  const docs = await req.db.collection('gov').find({}, filter).toArray();
  const data = docs.map((doc) => doc[lang]);
  return res.json({ govAssetList: data });
});

export default handler;
