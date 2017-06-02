<template>
  <div class="profile">
    <img :src="$store.state.user.avatar" alt="avatar">
    <p class="username">{{ $store.state.user.username }}</p>
    <a href="/signout" class="signout">Sign out</a>
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
    created () {
        this.$http('get', '/auth').then(data => {
          if (data.state < 0) {
            this.$router.push({'name': 'Home'})
          } else {
            this.$store.commit('updateUser', data.user)
          }
        });
    }
  }
</script>
