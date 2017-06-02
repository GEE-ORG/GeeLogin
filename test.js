/**
 * Created by geeku on 02/06/2017.
 */
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    res.send('<a href="http://localhost:3001/?redirectUrl=http://localhost:3002/user">Login</a>');
});

app.get('/user', function (req, res) {
    if (req.query.sessionid) {
        res.cookie('sessionid', req.query.sessionid, {
            maxAge: 1000 * 60 * 60 * 24,
            path: '/'
        });
        res.redirect('/user');
    }
    // res.json(req.cookies);
    axios({
        method: 'get',
        url: 'http://localhost:3001/auth?sessionid=' + req.cookies.sessionid
    }).then(r => res.json(r.data));
});

app.listen(3002, function () {
    console.log('I\'m testing on port 3002! ψ(｀∇´)ψ');
});