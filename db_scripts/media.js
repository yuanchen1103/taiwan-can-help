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
    const workbook = XLSX.readFile(path.join(__dirname, 'data.xlsx'));
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);
    data.forEach((val) => {
      const utcDays = Math.floor(val.Date - 25569);
      const utcValue = utcDays * 86400;
      insertDocs.push({
        zhAssetContent: val.Content,
        zhAssetOrganization: val.Organization,
        enAssetContent: val.Content,
        enAssetOrganization: val.Organization,
        assetDate: new Date(utcValue * 1000),
        assetLink: val.Link,
      });
    });
    // console.log(insertDocs);
    await db.collection('media').insertMany(insertDocs);
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
})();
