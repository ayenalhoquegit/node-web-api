const {MongoClient} = require('mongodb');
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
  // Insert a bunch of documents
  db.collection('todos').insertOne({
  		text:'Some text',
  		completed : false
  	}, (err, result) => {
 		if(err){
 			console.log('Unable to insert : ', err)
 		}  

 		console.log(JSON.stringify(result.ops, undefined, 2)) 
    
  });

  db.collection('users').insertOne({
  	 	name:'Ayenal hoque',
  	 	age :23,
  	 	loaction:'Dhaka'
  },(err, res)=>{
  		if(err) console.log(err);
  		console.log(JSON.stringify(res.ops, undefined, 2));
  });

  client.close();
});
