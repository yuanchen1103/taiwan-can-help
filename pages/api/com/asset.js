import nextConnect from 'next-connect';
import mongo from '../../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const docs = await req.db.collection('com').find({}, {
    _id: 0,
    zhAssetContent: 1,
    zhAssetOrganization: 1,
    enAssetContent: 1,
    enAssetOrganization: 1,
    assetPhotoUrl: 1,
  }).toArray();
  const data = {
    'zh-TW': [],
    'en-US': [],
  };
  docs.forEach((doc) => {
    data['zh-TW'].push({
      assetPhotoUrl: doc.assetPhotoUrl,
      assetContent: doc.zhAssetContent,
      assetOrganization: doc.zhAssetOrganization,
    });
    data['en-US'].push({
      assetPhotoUrl: doc.assetPhotoUrl,
      assetContent: doc.enAssetContent,
      assetOrganization: doc.enAssetOrganization,
    });
  });
  res.json(data);
});

export default handler;
