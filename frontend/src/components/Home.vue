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
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <input type="submit" value="Sign in">
    </form>
  </div>
</template>

<script>
  import '../assets/oauth/github.svg';
  export default {
    name: 'home',
    data () {
      return {
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
        }
    }
  }
</script>
