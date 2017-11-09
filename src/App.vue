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
  @import "assets/css/mixin";

  .app-wrapper {
    @include clearfix;
    @include width(100%, 100%);
    position: relative;
    margin: 0 auto;
    max-width: 1000px;
  }
</style>
