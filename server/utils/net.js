/**
 * Created by geeku on 29/05/2017.
 */

export function getIP (req) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}