const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB database');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    db.collection('Users').insertOne({
        name: 'Alex',
        age: 38,
        location: 'Tula'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));;
    });

    db.close();
});

