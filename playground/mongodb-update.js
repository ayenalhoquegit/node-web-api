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
  
  db.collection('todos').findOneAndUpdate({
        _id:new ObjectId('5c75231345302f3c88c8ba81')
  }, {
      $set:{
        completed:true  
      }
      
  }, {
      returnOriginal:false
  }).then((res)=>{
      console.log(res)
  }, (error)=>{
      console.log(error)
  });

  
});
