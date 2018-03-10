const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database');
  }

  const myBD = db.db('TodoApp');

  myBD.collection('Todos').insertOne(
    {
      name: 'Kevin',
      age: 16
    },
    (err, result) => {
      if(err){
        return console.log('Unable to insert data');
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db.close();
});
