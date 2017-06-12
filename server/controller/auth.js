/**
 * Created by geeku on 29/05/2017.
 */
import User from '../model/User';
import OAuth from '../model/OAuth';

export default async function (req, res) {
    let session = req.session;

    if (req.query.sessionid) {
        session = await new Promise((r, j) => {
            req.sessionStore.get(req.query.sessionid, function (error, data) {
                console.log(data);
                r(data);
            });
        }).then(data => data);
    }

    if (session && session.isLogin) {
        let userProfile = {
            username: session.username,
            avatar: session.avatar,
            email: session.email,
            source: ''
        };
        if (session.type === 'oauth') {
            const uid = await OAuth.find({
                attributes: ['uid'],
                where: {
                    id: session.uid
                }
            }).then(data => data.get('uid') || null);
            if (uid) {
                const oauthToUser = await User.find({
                    where: {
                        uid: uid
                    }
                }).then(data => {
                    return {
                        username: data.get('username'),
                        avatar: data.get('avatar'),
                        email: data.get('email')
                    }
                });
                Object.assign(userProfile, oauthToUser);
            } else {
                userProfile.source = session.source;
            }
        }
        res.json({
            state: 1,
            isLogin: true,
            user: userProfile
        });
    } else {
        res.json({
            state: -1,
            message: 'Unauthorized!'
        });
    }
}