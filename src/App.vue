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

@font-face {
  font-family: Raleway;
  src: url('./assets/Raleway-Regular.ttf');
}

@font-face {
  font-family: Raleway;
  src: url('./assets/Raleway-Bold.ttf');
  font-weight: bold;
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Raleway, 'Avenir', Helvetica, Arial, sans-serif;
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

::-webkit-scrollbar {/*滚动条整体样式*/
  width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 1px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.7)
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.4);*/
  border-radius: 5px;
  background: transparent;
}
</style>
