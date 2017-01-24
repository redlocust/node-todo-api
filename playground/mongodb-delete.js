const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB database');

    db.collection('Todos').deleteMany({'text': 'Eat lunch'}).then((result => {
        console.log(result);
    }));

    //db.close();
});

