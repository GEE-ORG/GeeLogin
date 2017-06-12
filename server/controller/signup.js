/**
 * Created by geeku on 10/06/2017.
 */
import User from '../model/User';
import OAuth from '../model/OAuth';
import { encryptPassword, md5 } from '../utils/crypto';
import { getIP } from '../utils/net';
import CONST from '../utils/const';

const emailRegex = CONST.REGEX.EMAIL;

export default async function (req, res) {

    if (
        !req.body.username ||
        !req.body.email ||
        !req.body.password
    ) {
        res.json({
            state: -1,
            msg: 'Some fields are missing!'
        });
        return;
    }

    const session = req.session || {};
    const username = req.body.username;
    const email = req.body.email;

    if (!emailRegex.test(email)) {
        res.json({
            state: -1,
            msg: 'Something wrong with email format!'
        });
        return;
    }

    const user = await User.findAll({
        where: {
            $or: {
                username, email
            }
        }
    }).then(data => data);

    if (user.length) {
        res.json({
            state: -1,
            msg: 'User exists, try to sign in directly.'
        });
        return;
    }

    const password = encryptPassword(req.body.password);
    const userProfile = {
        username, email,
        password: password.password,
        salt: password.salt,
        ip: getIP(req)
    };
    if (
        session.isLogin &&
        session.type === 'oauth'
    ) {
        oauthProfile = await OAuth.find({
            attributes: ['id', 'avatar', 'source'],
            where: {
                id: session.uid
            }
        }).then(data => data);
        userProfile.source = oauthProfile.get('source');
        userProfile.avatar = oauthProfile.get('avatar');
    } else {
        userProfile.avatar = 'https://cn.gravatar.com/avatar/' + md5(userProfile.email);
    }

    const userCreated = await User.create(userProfile).then(data => data);

    res.json({
        state: 1,
        msg: 'Sign up successful!'
    });
}