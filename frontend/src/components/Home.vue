<template>
  <div class="login">
    <div class="oauth">
      <!--<p>Sign in with social accounts</p>-->
      <a v-for="item in oauth" :href="item.url">
        <img :src="oauthImgPath(item.name)" :alt="item.name">
      </a>
    </div>
    <div class="or">- OR -</div>
    <form action="signin" class="signin" @submit.prevent="signin">
      <input
        type="text"
        placeholder="Username/Email"
        name="name"
        autofocus
        required
        v-model="name"
        @keyup.enter="next"
        v-show="step === 0"
      >
      <input
        type="text"
        placeholder="Email"
        name="email"
        v-model="email"
        v-if="needEmail"
        @keyup.enter="next"
      >
      <input
        type="text"
        placeholder="Username"
        name="username"
        v-model="username"
        v-if="needUsername"
        @keyup.enter="next"
      >
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        v-model="password"
        v-show="finalStep"
      >

      <input type="button" value="reset" v-show="step > 0" @click="reset">
      <input type="button" value="NEXT" v-show="!finalStep" @click="next">

      <input type="submit" :value="submitVal" v-model="submitVal" v-show="finalStep">
    </form>
  </div>
</template>

<script>
  import '../assets/oauth/github.svg';

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export default {
    name: 'home',
    data () {
      return {
        name: '',
        username: '',
        password: '',
        email: '',
        userExist: false,
        needEmail: false,
        needUsername: false,
        step: 0,
        finalStep: false,
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
        if (!this.finalStep) {
            this.next();
        }
      },
      reset () {
        this.name = '';
        this.username = '';
        this.password = '';
        this.email = '';
        this.userExist = false;
        this.needEmail = false;
        this.needUsername = false;
        this.step = 0;
        this.finalStep = false;
      },
      next () {
        const steps = {
          0: async () => {
            await this.checkName(this.name);
            if (this.userExist) {
              this.finalStep = true;
            } else {
              if (emailRegex.test(this.name)) {
                this.needUsername = true;
              } else {
                this.needEmail = true;
              }
              this.needUsername && await this.checkName(this.username);
              this.needEmail && await this.checkName(this.email);
            }
          },
          1: () => {
            this.finalStep = true;
          }
        }
        steps[this.step++]();
      },
      checkName (val) {
        return this.$http('post', '/checkName', { name: val }).then(data => {
            console.log(data);
            this.userExist = data.userExist;
            return this.userExist;
        });
      }
    },
    computed: {
      submitVal () {
          return this.userExist ? 'Sign in' : 'Sign up';
      }
    }
  }
</script>
