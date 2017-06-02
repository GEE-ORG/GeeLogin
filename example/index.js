/**
 * Created by geeku on 02/06/2017.
 */
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log(__dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
});
app.get('/signin', function (req, res) {
    const sessionid = req.query.sessionid;
    if (!sessionid) {
       res.send('ERROR');
    }
    res.cookie('sessionid', req.query.sessionid, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        path: '/',
        httpOnly: true
    });
    axios({
        method: 'get',
        url: 'http://localhost:3001/auth?sessionid=' + sessionid
    }).then(r => {
        res.cookie('sessionid', req.query.sessionid, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            path: '/',
            httpOnly: true
        });
        res.json(r.data)
    });
    res.redirect('/user');
});

app.listen(3002, function () {
    console.log('I\'m testing on port 3002! ψ(｀∇´)ψ');
});