/**
 * Created by geeku on 27/05/2017.
 */
import express from 'express';
import { default as cookieParser } from 'cookie-parser';
import githubOauth from './oauth/github';

import DBSync from './model/sync';

DBSync();

const app = express();

app.use(express.static(__dirname + '/view/public'));
app.use(cookieParser());

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/view/index.html');
});

app.get('/github', githubOauth);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});