import './extend'
import Vue from 'vue'
import router from './routes'
import { request, download, upload } from './ajax'

Vue.prototype.$request = request
Vue.prototype.$download = download
Vue.prototype.$upload = upload

window.vm = new Vue({
  router,
  render: h => {
    return (
      <div role='app'>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    )
  }
}).$mount('#app')
