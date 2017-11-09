<template>
  <div class="dialog">
    <div class="messages">
      <Robot />
      <Me />
    </div>
    <div class="send">
      <el-input v-model="input" placeholder="请输入内容..." class="input-box"></el-input>
      <el-button type="success" class="send-btn">发送</el-button>
    </div>
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

  .send {
    width: 100%;
    position: absolute;
    bottom: 30px;
    left: 0;

    .input-box {
      width: calc(100% - 70px);

      .el-input__inner {
        border-radius: 0;
      }
    }

    .send-btn {
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 0;
    }
  }
}
</style>
