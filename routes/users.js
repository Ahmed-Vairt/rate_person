var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('users');
// });


var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://ahmad.mirza9925:TIGER525316mirza@ds163300.mlab.com:63300/todo_node_db');
var todoSchema = new mongoose.Schema({
    item: String,
    desc: String,
    rate: String,
    file_name: String
});
var Todo = mongoose.model('Todo', todoSchema);
var urlencodedparser = bodyparser.urlencoded({extended:false});


    router.get('/', function (req, res) {
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('users', {todos: data});
        });
    });

    router.post('/users', urlencodedparser, function (req, res) {

        var newTodo = Todo(req.body).save(function (err, data) {
                if (err) throw err;
                res.json(data);
                res.end(JSON.stringify(data));

            });
        // data.push(req.body);
    });

    router.put('/star/:id', urlencodedparser, function (req, res) {
        var db = req.db;
        var userToUpdate = req.params.id;
        db.collection('todos').update({ _id: ObjectId(userToUpdate)}, req.body, function (err, result) {
            res.send(
                (err === null) ? {msg: ''} : {msg: err}
            );
        });
        // data.push(req.body);
    });

    // router.delete('/delete_data/:item', function(req, res){
    //     Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
    //         if(err) throw err;
    //         res.json(data);
    //     });
    // });







module.exports = router;
