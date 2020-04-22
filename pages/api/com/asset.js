import nextConnect from 'next-connect';
import mongo from '../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const doc = await req.db.collection('com').find({}, {
    _id: 0,
    assetContent: 1,
    assetOrganization: 1,
    assetPhotoUrl: 1,
  }).toArray();
  res.json({ comAssetList: doc });
});

export default handler;
