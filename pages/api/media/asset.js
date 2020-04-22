import nextConnect from 'next-connect';
import mongo from '../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const doc = await req.db.collection('media').find({}, {
    _id: 0,
    assetContent: 1,
    assetDate: 1,
    assetOrganization: 1,
    assetLink: 1,
  }).sort({ assetDate: -1 }).toArray();
  res.json({ mediaAssetList: doc });
});

export default handler;
