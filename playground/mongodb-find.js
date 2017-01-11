const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB database');

    // db.collection('Todos').findOne({text: 'Walk with the dog'}, (err, result) => {
    //     if(err) {
    //         return console.log('We didn\'t find todo ', err);
    //     }
    //
    //     console.log('we find todo', result);
    // });

    // var find = db.collection('Todos').find();
    //
    // find.forEach((elem) => {
    //     console.log(elem);
    // });

    db.collection('Users').find({name: 'Alex'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find', err);
    });

    db.close();
});

