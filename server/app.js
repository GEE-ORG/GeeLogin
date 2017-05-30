/**
 * Created by geeku on 27/05/2017.
 */
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import githubOAuth from './oauth/github';
import Auth from './controller/auth';
import Signout from './controller/signout';

import DBSync from './model/sync';

// DBSync(true) will drop all tables and create new tables
DBSync();

const app = express();

app.use(express.static(__dirname + '/view/public'));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'El psy congroo',
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/view/index.html');
});

app.get('/github', githubOAuth);
app.get('/auth', Auth);
app.get('/signout', Signout);

app.listen(3000, function () {
	console.log('I\'m listening on port 3000! ψ(｀∇´)ψ');
});