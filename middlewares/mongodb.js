import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://user:hBQfDUDqaccBYRSQ@cluster0-ghmml.gcp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function mongo(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.NODE_ENV === 'production' ? 'production' : 'test');
  console.log('mongodb connected');
  return next();
}
