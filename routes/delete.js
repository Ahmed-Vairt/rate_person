var express = require('express');
var router = express.Router();

//
// router.delete('/:id', function(req, res) {
//     db.posts.remove({_id: req.param('id')}, function(err, post) {
//         if (err) return res.send(err.message, 500); // server error
//         res.send(200);
//     })
// });

// router.delete('/:id', function(req, res){
//     db.posts({id: req.params.id.replace(/\-/g, ' ')}).remove(function(err, data){
//             if(err) throw err;
//             res.json(data);
//         });
//     });

router.delete('/deleteR/:id', function(req, res) {

    User.Remove({ id: req.params.id }, function(err) {
        if (!err) {
            return res.send('User deleted!');
        } else {
            return res.send('Error deleting user!');
        }
    });
});



module.exports = router;