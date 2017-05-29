/**
 * Created by geeku on 28/05/2017.
 */

export function randomString(length = 8, filter = letter => letter ) {
    const template = 'abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ0123456789`-=[];,./~!@#$%^&*()_+{}|:"<>?';
    const templateFiltered = Array.from(template).filter(filter).join('');
    return Array.from({length}, () => templateFiltered[~~(Math.random() * templateFiltered.length)]).join('');
}