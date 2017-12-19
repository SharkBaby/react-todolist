const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jwt = require('jsonwebtoken');
var request = require('request');
var cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res, next) {
    res.sendFile(__dirname+'/dist/index.html') 
});


app.listen(8080, () => {
    console.log(`Server running on port 8080 ...`);
});