<template>
  <div id="app">
    <div id="loading" :class="{'show': $store.state.isLoading}"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeMount () {
    this.$http('get', '/auth').then(data => {
      if (data.state < 0) {
        return;
      } else {
        this.$store.commit('updateUser', data.user);
        this.$router.push({'name': 'Profile'});
      }
    });
  }
}
</script>

<style lang="scss">
@import "./css/style";
</style>
