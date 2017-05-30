/**
 * Created by geeku on 29/05/2017.
 */
import User from '../model/User';
import OAuth from '../model/OAuth';

export default async function (req, res) {
    const session = req.session;

    if (session.isLogin) {
        let userProfile = null;
        if (session.type === 'oauth') {
            userProfile = await OAuth.findOne({
                where: {
                    id: session.uid
                }
            }).then(user => {
                return {
                    username: user.username,
                    avatar: user.avatar,
                    email: user.email,
                    source: user.source,
                    uid: user.uid
                }
            });
            if (userProfile.uid) {
                userProfile = await User.findOne({
                    where: {
                        uid: userProfile.uid
                    }
                }).then(user => {
                    return {
                        username: user.username,
                        avatar: user.avatar,
                        email: user.email,
                        source: userProfile.source
                    }
                });
            }
        } else {
            userProfile = await User.findOne({
                where: {
                    uid: session.uid
                }
            }).then(user => {
                return {
                    username: user.username,
                    avatar: user.avatar,
                    email: user.email
                }
            });
        }
        res.json({
            isLogin: true,
            user: userProfile
        });
    } else {
        res.redirect('/');
    }
}