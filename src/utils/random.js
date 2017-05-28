/**
 * Created by geeku on 28/05/2017.
 */

export function randomString(length = 8) {
    const template = 'abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ0123456789`-=[];,./~!@#$%^&*()_+{}|:"<>?';
    return Array.from({length}, () => template[~~(Math.random() * template.length)]).join('');
}