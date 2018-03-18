<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: Prism-Regular;
  src: url('./assets/Prism-Regular.otf');
}

@font-face {
  font-family: Ali;
  src: url('./assets/Ali.ttf');
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

/*覆盖iview样式*/
#app .ivu-input, #app .ivu-input-group-append, #app .ivu-input-group-prepend {
  /*border-radius: 1px;*/
}

#app .ivu-card-body {
  padding-bottom: 10px;
  padding-top: 5px;
}

#app .ivu-card-head {
  border-bottom: 0;
  padding-bottom: 5px;
}

#app .ivu-layout {
  background: #ececec;
}

#app .ivu-badge-count {
  background: #e45857!important;
}
</style>
