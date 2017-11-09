<template>
  <div class="robot">
    <span :style="robotIcon" class="dialog-icon"></span>
    <p class="dialog-content">
      <span>
        {{msg}}
      </span>
      <i class="dialog-arrow left"></i>
    </p>
  </div>
</template>

<script>
import icon from '../assets/images/robot.svg';

export default {
  name: 'Robot',
  data() {
    return {
      msg: '我是机器人',
      robotIcon: {
        backgroundImage: `url(${icon})`,
      },
    };
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../assets/css/mixin";

  .robot {
    @include clearfix;
    @include flex(row, flex-start, center);
    margin: 10px 0 10px 10px;
    max-width: 80%;

    .dialog-content {
      background: #efeeee;
      border-top-right-radius: 6px;
    }

    .dialog-arrow {
      border-right-color: #efeeee;
    }

    .dialog-icon {
      margin-right: 20px;
    }
  }

  .dialog-icon {
    @include flex(row, center, center);
    @include width(50px, 50px);
    background-size: 40px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    min-width: 50px;
  }

  .dialog-content {
    margin: 0;
    padding: 6px 18px;
    word-break: break-all;
    position: relative;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    line-height: 1.5em;
    box-shadow: 0 0 10px 0 rgba(166, 172, 211, 0.15);
  }

  .dialog-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }

  .dialog-arrow.left {
    top: 0;
    left: -10px;
    border-width: 0 10px 10px 0;
  }
</style>
