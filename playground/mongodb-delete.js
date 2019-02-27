const {MongoClient, ObjectId} = require('mongodb');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'todoApp';

// Connect using MongoClient
MongoClient.connect(url, { useNewUrlParser: true },  (err, client) => {

	if(err) console.log('Unable to connect : ', err)
  // Create a db 
  const db = client.db(dbName);
  // deleteOne
  /*db.collection('todos').deleteOne({text:'lunch'}).then((res)=>{
      console.log('res :', res);
  }, (error)=>{
      console.log('unable to delete', error)
  });*/

  // deleteMany

  /*db.collection('todos').deleteMany({text:'dinnar'}).then((res)=>{
      console.log(res);
  }, (error)=>{
      console.log(error);
  });*/



  // findOneAndDelete

  db.collection('todos').findOneAndDelete({text:'breakfast'}).then((res)=>{
      console.log(res);
  }, (error)=>{
      console.log('error', error)
  })




  
});
