/**
 * Created by geeku on 28/05/2017.
 */
import {default as fetch} from 'axios';
import conf from '../conf/oauth';

export default async function (req, res) {

    const githubConf = conf.github;
    const graphqlUrl = githubConf.url.graphql;

    const token = (req.cookies && req.cookies.accessToken) ?
        req.cookies.accessToken :
        await getToken(req.query.code, githubConf.clientID, githubConf.clientSecret);

    !token && res.redirect('/');
    (req.cookies.accessToken && req.query.code) && res.redirect('/github');

    const userProfileReqData = {
        headers: {
            'Authorization': `token ${token}`,
            'User-Agent': 'GeeLogin'
        }
    }
    const userProfileBody = {
        query: `query {
			viewer {
				login
				email
				avatarUrl
				websiteUrl
			}
		}`
    };
    const userProfile = await fetch.post(
        graphqlUrl,
        userProfileBody,
        userProfileReqData
    ).then(r => r.data || {});



    !req.cookies.accessToken && res.cookie('accessToken', token, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    });
    res.json(userProfile);
}

async function getToken(code, clientID, clientSecret) {

    const githubConf = conf.github;
    const tokenUrl = githubConf.url.accessToken;

    if (!code) {
        return;
    }

    const tokenReqBody = {
        client_id: clientID,
        client_secret: clientSecret,
        code
    };
    const reqData = {
        headers: {
            Accept: 'application/json'
        },
    };
    const token = await fetch.post(tokenUrl, tokenReqBody, reqData).then(r => {
        console.log(r.data);
        return r.data.access_token || null;
    });

    return token;
}