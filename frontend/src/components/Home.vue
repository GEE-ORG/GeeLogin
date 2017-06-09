<template>
  <div class="login">
    <div class="oauth">
      <p>Sign in with social accounts</p>
      <a v-for="item in oauth" :href="item.url">
        <img :src="oauthImgPath(item.name)" :alt="item.name">
      </a>
    </div>
    <div class="or">- OR -</div>
    <form action="signin" class="signin" @submit.prevent="signin">
      <input type="text" placeholder="Username/Email" name="username" autofocus required @blur="checkName" v-model="username">
      <input type="text" placeholder="Email" name="email" v-model="email" v-if="needEmail">
      <input type="password" placeholder="Password" name="password" required v-model="password">
      <input type="submit" :value="submitVal" v-model="submitVal">
    </form>
  </div>
</template>

<script>
  import '../assets/oauth/github.svg';
  export default {
    name: 'home',
    data () {
      return {
        username: '',
        password: '',
        email: '',
        checkedName: '',
        submitVal: 'Sign in / Sign up',
        userExist: false,
        needEmail: false,
        oauth: [
          {
            name: 'github',
            url: 'https://github.com/login/oauth/authorize?client_id=6e6d16dc32560e7d5b34&scope=user'
          }
        ],
      }
    },
    methods: {
      oauthImgPath (name) {
          return require('../assets/oauth/' + name + '.svg');
      },
      signin () {

      },
      checkName () {
        if (this.username === this.checkedName) {
          return;
        }
        this.checkedName = this.username;
        this.$http('post', '/checkName', { username: this.username }).then(data => {
            console.log(data);
            if (data.state > 0) {
              this.userExist = true;
              this.submitVal = 'Sign In';
            } else {
              this.userExist = false;
              this.submitVal = 'Sign up'
            }
        });
      }
    }
  }
</script>
