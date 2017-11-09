<template>
  <div class="me fr">
    <p class="dialog-content">
      <span>
        {{msg}}
      </span>
      <i class="dialog-arrow right"></i>
    </p>
    <span :style="meIcon" class="dialog-icon"></span>
  </div>
</template>

<script>
import icon from '../assets/images/media.svg';

export default {
  name: 'Me',
  data() {
    return {
      msg: '我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人我是自己人',
      meIcon: {
        backgroundImage: `url(${icon})`,
      },
    };
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../assets/css/mixin";

  .me {
    @include clearfix;
    @include flex(row, flex-end, center);
    margin: 10px 10px 10px 0;
    max-width: 80%;

    .dialog-content {
      background: #409EFF;
      border-top-left-radius: 6px;
    }

    .dialog-arrow {
      border-left-color: #409EFF;
    }

    .dialog-icon {
      margin-left: 20px;
    }
  }

  .dialog-arrow.right {
    top: 0;
    right: -10px;
    border-width: 0 0 10px 10px;
  }
</style>
