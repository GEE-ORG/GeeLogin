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
        ],
        isLogin: false,
        username: '',
        avatar: ''
    },
    created: function () {
        fetch('/auth', {
            credentials: 'include'
        }).then(r => r.json()).then(data => {
            this.isLogin = data.isLogin || false;
            this.username = data.user.username;
            this.avatar = data.user.avatar;
            this.source = data.user.source;
        });
    }
});