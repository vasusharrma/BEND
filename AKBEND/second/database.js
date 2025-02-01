const { MongoClient } = require('mongodb');

const URI
  = "mongodb+srv://Ram:7spze2dy9n@vasusharrmaa.4itmd.mongodb.net/";

// we will connect to database here

const client = new MongoClient(URI);
const dbName = 'pg';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');

  // the following code examples can be pasted here...
  // read the document 
  //
  // const findResult = await collection.find({}).toArray();
  // console.log("Result is => ", findResult);
  //
  // //insert the data
  // const idata = {
  //   name: "Ashutosh Sharma",
  //   address: "Saharanpur"
  // };
  //
  // const insertDocument = await collection.insertMany([idata]);
  // const ResutlAi = await collection.find({}).toArray();
  //
  // console.log("After inserting document the data is : ", ResutlAi);
  //
  // 
  // const docToIn = {
  //   name: "Nikhil Rana",
  //   address: "Nanauta"
  // }
  //
  // const dataInsert = await collection.insertOne(docToIn);
  //
  // const readDocument = await collection.find({}).toArray();
  // console.log("document is : ", readDocument);
  //
  //
  //

  const readAshu = await collection.find({ name: "Ashutosh Sharma" }).toArray();
  console.log("ashu is : ", readAshu);

  return 'done.';

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
