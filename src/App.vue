<template>
  <div id="app">

        <router-link to="/">
          Домой
        </router-link>
        <router-link to="/test">
          Тест
        </router-link>

    <router-view></router-view>
  
  </div>
</template>

<script>


export default {
  name: 'App',  
  components: {
  },

}
</script>

<style>

</style>
