import nextConnect from 'next-connect';
import mongo from '../../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const docs = await req.db.collection('gov').find({}, {
    _id: 0,
    zhAssetName: 1,
    zhAssetIntro: 1,
    enAssetName: 1,
    enAssetIntro: 1,
    assetPhotoUrl: 1,
    assetLink: 1,
  }).toArray();
  const data = {
    'zh-TW': [],
    'en-US': [],
  };
  docs.forEach((doc) => {
    data['zh-TW'].push({
      assetLink: doc.assetLink,
      assetPhotoUrl: doc.assetPhotoUrl,
      assetName: doc.zhAssetName,
      assetIntro: doc.zhAssetIntro,
    });
    data['en-US'].push({
      assetLink: doc.assetLink,
      assetPhotoUrl: doc.assetPhotoUrl,
      assetName: doc.enAssetName,
      assetIntro: doc.enAssetIntro,
    });
  });
  res.json(data);
});

export default handler;
