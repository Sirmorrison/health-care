var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'eddy40ice.',
    database : 'eddy'
});


            //users registration.
router.post('/Register', function(req, res){
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        // var name = req.body.name;

        if (username && email && password && name)
        {
            //save to database
            connection.connect();
            connection.query('INSERT INTO user VALUES (id,username,password,name,email);',
                function (error, results, fields) {
                if (error) {
                    throw error;
                }
                console.log('The solution is: ', results[0].solution);
            });
            connection.end();

            res.send('user registered');
        }

    //updates user profile

        if (username && email && password && name)
        {
            connection.connect();

                connection.query('INSERT INTO user_profile (id,username,password,name,email)' +
                    ' SELECT id,username,password,name,email FROM user;',
                    function (error, results, fields) {
                    if (error) throw error;
                    console.log('The solution is: ', results[0].solution);
                });

            connection.end();

            res.send('PLEASE LOGIN TO CONTINUE');
        }
        else
        {
            //one or more required fields are missing
            res.send("Oga, your request is invalid.");
        }
});


            //user login.
router.post('/login', urlencodedParser, function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    if (username && email && password)
    {
        // authenticates user from the database
        connection.connect();

        connection.query('SELECT username,email,password FROM users ' +
            'WHERE username ='+username,
            'AND email ='+ email, 'AND password ='+ password,
            function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            });

        connection.end();
        res.send('welcome, ' + req.body.username);

    if (!req.body)
      return res.sendStatus(400)
    }

});


    //updating user profile

router.post('/profile', urlencodedParser, function (req, res) {
    if (req.body)
    {
        connection.connect();
        connection.query('INSERT INTO users VALUES (id,username,password,name,email);', function (error, results, fields) {
            if (error) throw error;
        });
        connection.end();

        res.send('user registered');

    }

});


module.exports = router;
