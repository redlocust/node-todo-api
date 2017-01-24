const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB database');

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectId("5875651cfbfe411474a1bd8f")},
        { $set : {name : 'Alexei1'},
        $inc : {age: 1}}
    );

    //db.close();
});

