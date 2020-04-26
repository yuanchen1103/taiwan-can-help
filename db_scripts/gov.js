const { MongoClient } = require('mongodb');
const path = require('path');
// eslint-disable-next-line
const XLSX = require('xlsx');

const url = 'mongodb+srv://user:hBQfDUDqaccBYRSQ@cluster0-ghmml.gcp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
(async () => {
  const insertDocs = [];
  try {
    if (!client.isConnected()) await client.connect();
    const db = client.db(process.env.NODE_ENV === 'production' ? 'production' : 'test');
    // await db.collection('gov').drop();
    const workbook = XLSX.readFile(path.join(__dirname, 'data.xlsx'));
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[3]]);
    data.forEach((val) => {
      const doc = {
        assetPhotoUrl: val.PhotoUrl,
        assetLink: val.Link,
      };
      insertDocs.push({
        'zh-TW': {
          assetIntro: val.Intro,
          assetName: val.Name,
          ...doc,
        },
        'en-US': {
          assetIntro: val.Intro,
          assetName: val.Name,
          ...doc,
        },
      });
    });
    insertDocs.splice(0, 1);
    // console.log(insertDocs);
    await db.collection('gov').insertMany(insertDocs);
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
})();
