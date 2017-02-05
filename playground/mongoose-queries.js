const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '688dbf1fd13d74080441a3311111';
//
// if (!ObjectId.isValid(id)) {
//     console.log('id not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });
//
// Todo.findById(id)
// .then((todo) => {
//     if(!todo) {return console.log(`todo id not exist`)}
//     console.log(todo);
// }).catch((e) => console.log(e));

var id = '68854ddaf6fd3b2738400b1118b';

User.findById(id)
    .then((user) => {
        if (!user) { return console.log('user id not exist')}
            console.log(user);
    }).catch((e) => console.log(e));