/**
 * Created by geeku on 09/06/2017.
 */
import User from '../model/User';
import OAuth from '../model/OAuth';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default async function (req, res) {
    const name = req.body.name;
    const isEmail = emailRegex.test(name);
    const query = isEmail ? { email: name } : { username: name };
    const userExist = await User.findOne({
        where: query
    }).then(user => {
        return user ? true : false
    });
    res.json({ state: userExist ? 1 : -1, userExist });
}