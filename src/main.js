import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //使用App组件作为模板创建一个元素
}).$mount('#app')  //挂载到#app节点
