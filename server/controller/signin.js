/**
 * Created by geeku on 10/06/2017.
 */
import User from '../model/User';
import OAuth from '../model/OAuth';
import { encryptPassword, md5 } from '../utils/crypto';
import CONST from '../utils/const';

export default async function (req, res) {

    const session = req.session;

    if (
        !req.body.name ||
        !req.body.password
    ) {
        res.json({
            state: -1,
            msg: 'Some fields are missing!'
        });
        return;
    }

    const name = req.body.name;
    const query = {};
    if (CONST.REGEX.EMAIL.test(name)) {
        query.email = name;
    } else {
        query.username = name;
    }

    const user = await User.find({
        where: query
    }).then(data => data);

    if (!user) {
        res.json({
            state: -1,
            msg: 'User doesn\'t exist'
        });
        return;
    }

    const password = encryptPassword(req.body.password, user.salt);
    if (password.password !== user.password) {
        res.json({
            state: -1,
            msg: 'Username or password is wrong.'
        });
        return;
    }

    if (
        session.isLogin === true &&
        session.type === 'oauth'
    ) {
        const update = await OAuth.update({
            uid: user.uid
        }, {
            where: {
                id: session.uid
            }
        }).then(data => data);
        if (!update) {
            res.json({
                state: -1,
                msg: 'Link failed!'
            });
        }
    }

    session.isLogin = true;
    session.type = 'user';
    session.uid = user.uid;
    session.username = user.username;
    session.avatar = user.avatar;
    session.email = user.email;

    console.log(session);

    const retMsg = {
        state: 1,
        msg: 'Sign in successful!'
    };
    if (session.isLogin === true && session.redirectUrl) {
        const redirectUrl = `${session.redirectUrl}/?sessionid=${session.id}`;
        retMsg.redirect = redirectUrl;
        session.redirectUrl = '';
    }
    res.json(retMsg);
}