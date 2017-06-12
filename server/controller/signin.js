/**
 * Created by geeku on 10/06/2017.
 */
import User from '../model/User';
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

    session.isLogin = true;
    session.type = 'user';
    session.uid = user.id;
    session.username = user.username;
    session.avatar = user.avatar;
    session.email = user.email;

    console.log(session);

    res.json({
        state: 1,
        msg: 'Sign in successful!'
    });
}