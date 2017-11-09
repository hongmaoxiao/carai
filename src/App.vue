<template>
  <div id="app">
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style rel="stylesheet/scss" lang="scss">
  // #app {
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   background: #f7f8fa;
  // }

  @import "assets/css/mixin";

  .app-wrapper {
    @include clearfix;
    @include width(100%, 100%);
    position: relative;
    margin: 0 auto;
    max-width: 1000px;
  }
</style>
