import nextConnect from 'next-connect';
import mongo from '../../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const docs = await req.db.collection('map').find({}, {
    _id: 0,
    zhAssetCountry: 1,
    enAssetCountry: 1,
    assetGeo: 1,
    assetNum: 1,
    assetLink: 1,
  }).toArray();

  const data = [];
  if (req.headers['accept-language'] === 'zh-TW') {
    docs.forEach((doc) => {
      data.push({
        assetLink: doc.assetLink,
        assetGeo: doc.assetGeo,
        assetCountry: doc.zhAssetCountry,
        assetNum: doc.assetNum,
      });
    });
  } else if (req.headers['accept-language'] === 'en-US') {
    docs.forEach((doc) => {
      data.push({
        assetLink: doc.assetLink,
        assetGeo: doc.assetGeo,
        assetCountry: doc.enAssetCountry,
        assetNum: doc.assetNum,
      });
    });
  }
  res.json({ mapAssetList: data });
});

export default handler;
