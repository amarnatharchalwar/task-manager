const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('tasks');

    // insert records to db
    // const insertResult = await collection.insertMany([{ description: 'Buy Books', completed: true }, { description: 'Drink milk', completed: false }, { description: 'Call to Mom', completed: true }]);
    // console.log('Inserted documents =>', insertResult);

    //const filteredDocs = await collection.find({  name: 'Amarnath' }).toArray();
    //console.log('Found documents filtered by {  name: Amarnath } =>', filteredDocs);

    //updating records in db
    // const updateResult = await collection.updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // })
    // console.log('updateResult documents =>', updateResult);


    //deleting records 
    // const deletingRecords = await collection.deleteMany({
    //     age: 6
    // })
    // console.log('deletingRecords documents =>', deletingRecords);

    

     const deletingRecords = await collection.deleteOne({
        description: 'Call to Mom'
    })
    console.log('deletingRecords documents =>', deletingRecords);


    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());