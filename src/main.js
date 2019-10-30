import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
