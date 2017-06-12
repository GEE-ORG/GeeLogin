/**
 * Created by geeku on 28/05/2017.
 */
import {default as request} from 'axios';
import conf from '../conf/oauth';
import OAuth from '../model/OAuth';
import CONST from '../utils/const';

export default async function (req, res) {

    const githubConf = conf.github;
    const graphqlUrl = githubConf.url.graphql;
    const session = req.session;

    if (session.isLogin) {
        res.redirect('/');
    }

    const token = (session.token && session.token.type === 'github') ?
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

    let userProfile = null;
    try {
        userProfile = await request.post(
            graphqlUrl,
            userProfileBody,
            userProfileReqData
        ).then(r => r.data.data.viewer || {});
    } catch (e) {
        console.log(e);
    }

    let oauthID = -1;
    try {
        oauthID = await OAuth.findOne({
            where: {
                username: userProfile.login,
                source: 'github'
            }
        }).then(user => user.get('id'));
        // if there is no user matched, create one
        !oauthID && (oauthID = await OAuth.create({
            username: userProfile.login,
            email: userProfile.email,
            avatar: userProfile.avatarUrl,
            token: token,
            note: JSON.stringify(userProfile),
            source: CONST.OAUTH.SOURCE.GITHUB
        }).then(oauth => oauth.get('id')));
    } catch (e) {
        console.log(e);
        res.redirect('/github');
    }

    !session.token && (session.token = {
        type: 'github',
        data: token
    });
    session.isLogin = true;
    session.type = 'oauth';
    session.uid = oauthID;
    session.source = 'github';

    console.log(session);

    res.redirect('/');
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