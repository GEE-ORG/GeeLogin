<template>
  <div id="app">
    <div id="loading" :class="{'show': $store.state.isLoading}"></div>
    <div class="tip" v-show="tipShow">{{tip}}</div>
    <router-view @tip="onTip"></router-view>
  </div>
</template>

<script>
  let tipID = '';
  export default {
    name: 'app',
    data () {
      return {
        tip: '',
        tipShow: false
      }
    },
    methods: {
      onTip (m) {
        if (tipID) {
          this.tipShow = false;
          this.tip = '';
          clearTimeout(tipID);
        }
        this.tipShow = true;
        this.tip = m;
        tipID = setTimeout(() => {
          this.tipShow = false;
          this.tip = '';
        }, 5000);
      }
    },
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
  .tip {
    position: fixed;
    top: 0;
    left: 50%;
    min-width: 200px;
    background: #5DC517;
    padding: 10px 20px;
    transform: translateX(-50%);
    word-wrap: break-word;
    white-space: normal;
    color: #fff;
    border-radius: 0 0 5px 5px ;
    box-shadow: 0 10px 20px rgba(1,2,0,.2);;
  }
</style>
