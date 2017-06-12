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
        };
        if (session.type === 'oauth') {
            userProfile.source = session.source;
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