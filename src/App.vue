<template lang="pug">
  <!--挂载点-->
  div#app
    img(src="./assets/logo.png")
    h1 Welcome to my website2!
</template>

<script>
  //引入组件
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app', //组件名称
  components: {  //包含的子组件
    HelloWorld
  }
}
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 200px;

        h1 {
            color: #42b983;
        }
    }
</style>
