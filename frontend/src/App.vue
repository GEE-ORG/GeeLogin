<template>
  <div id="app">
    <div id="loading" :class="{'show': this.$store.state.isLoading}"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style lang="scss">
@import "./css/style";
</style>
