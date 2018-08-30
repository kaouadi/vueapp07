<template>
  <div id="app">

    <Header/>

    <Sidenav/>

    <Home/>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Sidenav from './components/Sidenav.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Sidenav
  }
}
</script>

<style>
</style>
