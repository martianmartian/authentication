// server.js

// set =========
// get all the tools

var express = require ('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

// followings are all for app()
var passport = require('passport');
var flash = require ('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// configuration ========

mongoose.connect(configDB.url); // connect to our database

//require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());  // read cookies (needed for auth)
app.use(bodyParser.json()); // get info from html forms
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engin','ejs');

// required for passport
app.use(session({secret: 'ilovescotchscotchyscotchscotch'}));
//session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messags stored in session

// routes====

// require('./app/routes.js')(app,passport);

//launch =====

app.listen(port);
console.log(" port is : " + port);





















