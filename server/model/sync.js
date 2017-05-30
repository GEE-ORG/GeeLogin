/**
 * Created by geeku on 28/05/2017.
 */
import User from './User';
import OAuth from './OAuth';

export default function sync (force = false) {
    User.sync({ force });
    OAuth.sync({ force });
}