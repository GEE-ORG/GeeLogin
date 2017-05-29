/**
 * Created by geeku on 28/05/2017.
 */
import {default as request} from 'axios';
import conf from '../conf/oauth';
import User from '../model/User';
import { randomString } from '../utils/random';
import { getIP } from '../utils/net';
import { encryptPassword } from '../utils/crypto';
import CONST from '../utils/const';

export default async function (req, res) {

    const githubConf = conf.github;
    const graphqlUrl = githubConf.url.graphql;
    const session = req.session;

    const token = (session && session.token && session.token.type === 'github') ?
        session.token.data :
        await getToken(req.query.code, githubConf.clientID, githubConf.clientSecret);

    !token && res.redirect('/');
    (session.token && session.token.data && req.query.code) && res.redirect('/github');

    const userProfileReqData = {
        headers: {
            'Authorization': `token ${token}`,
            'User-Agent': 'GeeLogin'
        }
    }
    const userProfileBody = {
        query: `query {
			viewer {
			    id
				login
				email
				avatarUrl
				websiteUrl
			}
		}`
    };
    const userProfile = await request.post(
        graphqlUrl,
        userProfileBody,
        userProfileReqData
    ).then(r => r.data.data.viewer || {});

    // User.findOne({
    //     where: { username: userProfile.login,  }
    // })

    const password = randomString();
    const passwdEncrypt = encryptPassword(password);

    const userCreate = User.create({
        username: userProfile.login,
        password: passwdEncrypt.password,
        salt: passwdEncrypt.salt,
        email: userProfile.email,
        avatar: userProfile.avatarUrl,
        ip: getIP(req),
        note: JSON.stringify(userProfile),
        source: CONST.OAUTH.SOURCE.GITHUB
    }).catch(e => console.log(e));

    !session.token && (session.token = {
        type: 'github',
        data: token
    });
    // !req.cookies.accessToken && res.cookie('accessToken', token, {
    //     path: '/',
    //     maxAge: 1000 * 60 * 60 * 24,
    //     httpOnly: true
    // });
    // userProfile.id = btoa(userProfile.id);
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
    const token = await request.post(tokenUrl, tokenReqBody, reqData).then(r => {
        console.log(r.data);
        return r.data.access_token || null;
    });

    return token;
}