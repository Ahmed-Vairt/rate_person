var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs'),
    formidable = require('formidable');



router.post('/', function (req, res) {

    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '../public/uploads');


    //generate random number to attach with file name
    // var rn = require('random-number');
    // var gen = rn.generator({
    //     min:  1000
    //     , max:  99999999
    //     , integer: true
    // })
    // var ran_name = gen();


    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir,file.name),function(err) {
            if (err) throw  err;
            console.log("File Renamed");

        });
    });



    // log any errors that occur
    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        res.end('success');
    });

    // parse the incoming request containing the form data
    form.parse(req);


});


module.exports = router;