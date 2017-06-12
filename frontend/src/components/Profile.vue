<template>
  <div class="profile">
    <img :src="$store.state.user.avatar + '?s=200'" alt="avatar">
    <p class="username">
      <img alt="source" class="source" :src="sourceImgPath()" v-if="$store.state.user.source">
      <span>{{ $store.state.user.username }}</span>
      <a href="/signout" class="signout">Sign out</a>
    </p>
    <div class="signup" v-if="$store.state.user.source">
      <button id="signup" @click="signup">Sign up with current profile</button>
      <button id="link-account" @click="signin">Or link to an exist account</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {
        avatar: '',
        username: 'Anonymous'
      }
    },
    mounted () {
        this.updateInfo();
    },
    methods: {
      sourceImgPath () {
        return require('../assets/oauth/' + this.$store.state.user.source + '.svg');
      },
      signup () {
          this.$store.commit('setSignIn', false);
          this.$router.push({ name: 'Home'});
      },
      signin () {
        this.$router.push({ name: 'Home'});
      },
      updateInfo () {
        this.$http('get', '/auth').then(data => {
          if (data.state < 0) {
            this.$router.push({'name': 'Home'})
          } else {
            this.$store.commit('updateUser', data.user)
          }
        });
      }
    }
  }
</script>
