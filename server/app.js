/**
 * Created by geeku on 27/05/2017.
 */
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import githubOAuth from './oauth/github';
import Auth from './controller/auth';
import Signout from './controller/signout';

import DBSync from './model/sync';

// DBSync(true) will drop all tables and create new tables
DBSync();

const app = express();

// app.use(express.static(__dirname + '/view/'));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'El psy congroo',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.get('/', function (req, res) {
    const session = req.session;
    req.query.redirectUrl && (session.redirectUrl = req.query.redirectUrl);

    if (session.isLogin === true) {
        const redirectUrl = `${session.redirectUrl}/?sessionid=${session.id}`;
        console.log(redirectUrl);
        res.redirect(redirectUrl);
        return;
    }
    res.redirect('/login/');

	// res.sendFile(__dirname + '/view/index.html');
});

app.get('/github', githubOAuth);
app.get('/auth', Auth);
app.get('/signout', Signout);
app.get('/session', function (req, res) {
    console.log(req.sessionStore);
    req.sessionStore.get(req.sessionID, function (error, d) {
        console.log(req.sessionID);
        res.send({error,d});
    });
    req.sessionStore.length(function (error, d) {
        console.log(error, d);
    });
});

app.listen(3000, function () {
	console.log('I\'m listening on port 3000! ψ(｀∇´)ψ');
});