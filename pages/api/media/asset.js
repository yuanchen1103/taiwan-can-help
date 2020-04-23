import nextConnect from 'next-connect';
import mongo from '../../../middlewares/mongodb';

const handler = nextConnect();

handler.use(mongo);

handler.get(async (req, res) => {
  const docs = await req.db.collection('media').find({}, {
    _id: 0,
    zhAssetContent: 1,
    zhAssetOrganization: 1,
    enAssetContent: 1,
    enAssetOrganization: 1,
    assetDate: 1,
    assetLink: 1,
  }).sort({ assetDate: -1 }).toArray();

  const data = [];
  if (req.headers['accept-language'] === 'zh-TW') {
    docs.forEach((doc) => {
      data.push({
        assetLink: doc.assetLink,
        assetDate: doc.assetDate,
        assetContent: doc.zhAssetContent,
        assetOrganization: doc.zhAssetOrganization,
      });
    });
  } else if (req.headers['accept-language'] === 'en-US') {
    docs.forEach((doc) => {
      data.push({
        assetLink: doc.assetLink,
        assetDate: doc.assetDate,
        assetContent: doc.enAssetContent,
        assetOrganization: doc.enAssetOrganization,
      });
    });
  }
  res.json({ mediaAssetList: data });
});

export default handler;
