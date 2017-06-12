/**
 * Created by geeku on 29/05/2017.
 */

import { randomString } from '../utils/random';
import crypto from 'crypto';

export function md5 (string) {
    return crypto.createHash('md5').update(string).digest("hex");
}

export function encryptPassword (password, salt = '') {
    salt = salt || randomString();
    password = md5(md5(password) + salt);

    return { password, salt };
}