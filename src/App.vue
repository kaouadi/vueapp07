<template>
  <div id="app">

    <Block0/>
    <Block1/>
    <Block2/>

  </div>
</template>

<script>
import Block0 from './components/Block0.vue'
import Block1 from './components/Block1.vue'
import Block2 from './components/Block2.vue'

export default {
  name: 'app',
  components: {
    Block0,
    Block1,
    Block2
  }
}
</script>

<style>
</style>
