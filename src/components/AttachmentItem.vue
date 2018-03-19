<template>
  <div class="attachment-item">
    <span  class="attachment-icon"><Icon type="image" size="22" style="color: #aaa;" /></span>
    <span class="attachment-title">force.gif</span>
    <span class="attachment-size">(128KB)</span>
    <span class="attachment-button">preview</span>
    <span class="attachment-button">download</span>
    <span class="attachment-button">share</span>
  </div>
</template>

<script>
export default {
  props: {
    coloredBG: {
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.attachment-item {
  clear: right;
  border-bottom: 1px solid #eeeff1;
  padding-bottom: 10px;
}
.attachment-icon {
  position: relative;
  top: 5px;
}
.attachment-title {
  margin-left: 10px;
}
.attachment-button {
  float: right;
  display: inline-block;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
  color: #999;
  transition: all .5s;
}
.attachment-button:hover {
  color: #2d8cf0;
}
</style>
