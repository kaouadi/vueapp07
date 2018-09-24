<template>
  <div id="app">
    <!--
    <Header/>
    <Sidenav/>
    -->
    <router-view/>
 

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidenav from './components/Sidenav.vue'

export default {
  name: 'app',
  components: {
    Header,
    Sidenav
  }
  
}
</script>

<style>
</style>
