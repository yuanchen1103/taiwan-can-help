import nextConnect from 'next-connect';
import mongo from '../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const doc = await req.db.collection('gov').find({}, {
    _id: 0,
    assetName: 1,
    assetIntro: 1,
    assetPhotoUrl: 1,
    assetLink: 1,
  }).toArray();
  res.json({ govAssetList: doc });
});

export default handler;
