const {MongoClient, ObjectId} = require('mongodb');
const test 		  = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'todoApp';

// Connect using MongoClient
MongoClient.connect(url, { useNewUrlParser: true },  (err, client) => {

	if(err) console.log('Unable to connect : ', err)
  // Create a db 
  const db = client.db(dbName);
  // find all record 
  db.collection('todos').find().toArray().then((todo)=>{
      console.log('Todos list : ', JSON.stringify(todo, undefined, 2));
  }, (error)=>{
    console.log('Unable to fetch data : ', error);
  });

  // find all record using project
 db.collection('todos').find({}).project({text:1, _id:0}).toArray((error, todo)=>{
      console.log('Todos list : ', JSON.stringify(todo, undefined, 2)); 
 });

 


  // count all record 
  db.collection('todos').find().count().then((count)=>{
      console.log(`Todos list : ${count}`);
  }, (error)=>{
    console.log('Unable to fetch data : ', error);
  });




  
});
