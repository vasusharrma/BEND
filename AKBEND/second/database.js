const { MongoClient } = require('mongodb');

const URI
  = "mongodb+srv://Ram:7spze2dy9n@vasusharrmaa.4itmd.mongodb.net/";

// we will connect to database here

const client = new MongoClient(URI);
const dbName = 'vasuatlas';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('pg');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
