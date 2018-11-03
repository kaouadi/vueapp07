import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


Vue.mixin({
  mounted: function () {
    var modals = document.querySelectorAll('.modal');
        
    for (var i = 0; i < modals.length; i++){
      window.M.Modal.init(modals[i]);
    }
  }
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
