<template>
  <div class="profile">
    <img :src="avatar" alt="avatar">
    <p class="username">{{ username }}</p>
    <a href="/signout" class="signout">Sign out</a>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {

      }
    }
  }
</script>
