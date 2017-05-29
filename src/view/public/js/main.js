/**
 * Created by geeku on 29/05/2017.
 */
new Vue({
    el: '#app',
    data: {
        oauth: [
            {
                name: 'github',
                url: 'https://github.com/login/oauth/authorize?client_id=6e6d16dc32560e7d5b34&scope=user'
            }
        ]
    },
    created: function () {
        fetch('/signin').then(r => r.json()).then(data => console.log(data));
    }
});