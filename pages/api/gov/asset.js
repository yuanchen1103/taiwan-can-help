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
  const data = [];
  if (req.headers['accept-language'] === 'zh-TW') {
    docs.forEach((doc) => {
      data.push({
        assetLink: doc.assetLink,
        assetPhotoUrl: doc.assetPhotoUrl,
        assetName: doc.zhAssetName,
        assetIntro: doc.zhAssetIntro,
      });
    });
  } else if (req.headers['accept-language'] === 'en-US') {
    docs.forEach((doc) => {
      data.push({
        assetLink: doc.assetLink,
        assetPhotoUrl: doc.assetPhotoUrl,
        assetName: doc.enAssetName,
        assetIntro: doc.enAssetIntro,
      });
    });
  }
  res.json({ govAssetList: data });
});

export default handler;
