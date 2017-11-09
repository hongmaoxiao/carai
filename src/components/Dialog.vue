<template>
  <div class="dialog">
    <Robot />
    <Me />
  </div>
</template>

<script>
import Robot from './Robot';
import Me from './Me';

export default {
  name: 'Dialog',
  components: {
    Robot,
    Me,
  },
  data() {
    return {
      msg: '',
    };
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../assets/css/mixin";

  .dialog {
    @include clearfix;
    @include width(100%, 800px);
    border: 1px solid #edecec;
    margin: 70px 0 30px;
    box-shadow: 0 0 10px 0 rgba(216,216,216,0.30);
    background: #fff;
  }
</style>
