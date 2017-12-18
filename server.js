const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jwt = require('jsonwebtoken');
var request = require('request');
var cookieParser = require('cookie-parser');

const app = express();

const API_HOST = "";

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/dist')));


app.get('/signin', function(req, res, next) {
    var redirectAddress = "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?";
    var query = {
        "client_id": "55e338c1-b9f3-454a-998c-6036c0c9c56f",
        "response_type": "id_token",
        "redirect_uri": "http://localhost:8080",
        "response_mode": "form_post",
        "scope": "openid profile email",
        "state": "12345",
        "nonce": "67890"
    };
    
    var ret = [];
    for (var k in query) {
        ret.push(encodeURIComponent(k) + "=" + encodeURIComponent(query[k]));
    }
    var url = redirectAddress + ret.join("&");
    
    res.redirect(url);

});

app.post("/", function(req, res, next) {
	var id_token = jwt.decode(req.body.id_token);
    var accountInfo = {
		"name":id_token.name,
		"preferred_username":id_token.preferred_username,
        "openid":id_token.oid,
        "email":id_token.email,
    }
    var millisecond = id_token.exp*1000 - new Date().getTime();
    res.cookie("user", cookieStr,{maxAge: millisecond});

    
});

app.get('*', function(req, res, next) {
    res.sendFile(__dirname+'/dist/index.html') 
});


app.listen(8080, () => {
    console.log(`Server running...`);
});