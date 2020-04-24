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
    // await db.collection('map').drop();
    const workbook = XLSX.readFile(path.join(__dirname, 'data.xlsx'));
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    data.forEach((val, id) => {
      if (id !== 0 && val['__EMPTY_1'] === '口罩' && val['__EMPTY_3'] === '片') {
        const doc = {
          assetGeo: [
            val['__EMPTY'].split('°')[1][0] === 'N'
              ? parseFloat(val['__EMPTY'].split('°')[0])
              : -1 * parseFloat(val['__EMPTY'].split('°')[0]),
            val['__EMPTY'].split(' ')[1].split('°')[1][0] === 'E'
              ? parseFloat(val['__EMPTY'].split(' ')[1].split('°')[0])
              : -1 * parseFloat(val['__EMPTY'].split(' ')[1].split('°')[0]),
          ],
          assetNum: val['__EMPTY_2'],
          assetLink: val['__EMPTY_4'],
        };
        insertDocs.push({
          'zh-TW': {
            assetCountry: val['口罩捐贈資料'],
            ...doc,
          },
          'en-US': {
            assetCountry: val['口罩捐贈資料'],
            ...doc,
          },
        });
      }
    });
    insertDocs[1]['zh-TW'].assetNum += insertDocs[2]['zh-TW'].assetNum;
    insertDocs[1]['en-US'].assetNum += insertDocs[2]['en-US'].assetNum;
    insertDocs[1]['zh-TW'].assetCountry = insertDocs[1]['en-US'].assetCountry = '歐盟';
    insertDocs.splice(2, 1);
    await db.collection('map').insertMany(insertDocs);
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
})();
