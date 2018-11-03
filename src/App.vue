<template>
  <div id="app">
    <Header v-on:changeTitle="updateTitle($event)"></Header>
    <!--<Sidenav/>-->
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
  },
  methods:{
    updateTitle: function(event){
      console.log('etape 2');
      console.log(event);
    }
  }

  
}
</script>



<style>
</style>
