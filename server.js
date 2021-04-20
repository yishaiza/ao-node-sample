require('appoptics-apm');

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 3000;
app.listen(port);
console.log("Running app. Visit: http://localhost:" + port + "/");

