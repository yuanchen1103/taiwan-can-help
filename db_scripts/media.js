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
    await db.collection('media').drop();
    const workbook = XLSX.readFile(path.join(__dirname, 'data.xlsx'));
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);
    data.forEach((val) => {
      const utcDays = Math.floor(val.Date - 25569);
      const utcValue = utcDays * 86400;
      const doc = {
        assetDate: new Date(utcValue * 1000),
        assetLink: val.Link,
      };
      insertDocs.push({
        'zh-TW': {
          assetContent: val.Content,
          assetOrganization: val.Organization,
          ...doc,
        },
        'en-US': {
          assetContent: val.Content,
          assetOrganization: val.Organization,
          ...doc,
        },
      });
    });
    // console.log(insertDocs);
    await db.collection('media').insertMany(insertDocs);
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
})();
