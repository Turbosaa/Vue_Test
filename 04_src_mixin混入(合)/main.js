// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
import { mixin1, mixin2 } from "./mixin";
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(mixin1,mixin2)

// 创建Vue实例对象
new Vue({
    render: h => h(App)
}).$mount('#app')