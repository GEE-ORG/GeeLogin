/**
 * Created by geeku on 30/05/2017.
 */
export default function (req, res) {
    req.session.isLogin = false;
    res.redirect('/');
}