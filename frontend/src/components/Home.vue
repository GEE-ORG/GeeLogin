<template>
  <div class="login">
    <div class="oauth">
      <!--<p>Sign in with social accounts</p>-->
      <a v-for="item in oauth" :href="item.url">
        <img :src="oauthImgPath(item.name)" :alt="item.name">
      </a>
    </div>
    <div class="or">- OR -</div>
    <form action="/signin" class="signin" @submit.prevent="signin" v-if="isSignIn">
      <input type="text" name="name" placeholder="Username/Email" v-model="user.name" required autofocus>
      <input type="password" name="password" placeholder="Password" v-model="user.password" required>
      <input type="submit" value="Sign In">
    </form>
    <form action="/signup" class="signup" @submit.prevent="signup" v-else>
      <input type="text" name="username" placeholder="Username" v-model="user.username" required autofocus>
      <input type="email" name="email" placeholder="Email" v-model="user.email" required>
      <input type="password" name="password" placeholder="Password" v-model="user.password" required>
      <input type="submit" value="Sign Up">
    </form>
    <input type="button" :value="isSignIn ? 'Sign Up' : 'Sign In'" class="sign-in-up" @click="signInOrUp">
  </div>
</template>

<script>
  import '../assets/oauth/github.svg';

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export default {
    name: 'home',
    data () {
      return {
        user: {
          name: '',
          username: '',
          password: '',
          email: '',
        },
        isSignIn: true,
        userExist: false,
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
      signInOrUp () {
        this.isSignIn = !this.isSignIn;
      },
      signin () {
        this.validator();
        this.$http('post', '/signin', this.user).then(data => {
          console.log(data);
        });
      },
      signup () {
        this.validator();
        this.$http('post', '/signup', this.user).then(data => {
          this.$emit('tip', data.msg);
          if (data.state < 0) {

          } else {

          }
        });
      },
      validator (val) {
        if (!this.user.password) {
          this.$emit('tip', 'Password is required!');
          return;
        }
        if (this.isSignIn) {
          if (!this.user.name) {
            this.$emit('tip', 'Username or email is required!');
            return;
          }
        } else {
          if (!this.user.username || !this.user.email) {
            this.$emit('tip', 'Username and email is required!');
            return;
          }
        }
      }
    }
  }
</script>
