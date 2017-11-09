<template>
  <div class="dialog">
    <div class="messages">
      <Robot />
      <div class="recommend">
        <Recommend v-for="(card, key) in cards" :card="card" :key="card-key" />
      </div>
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
import Recommend from './Recommend';
import icon from '../assets/images/media.svg';

export default {
  name: 'Dialog',
  components: {
    Robot,
    Me,
    Recommend,
  },
  data() {
    return {
      msg: '',
      input: '',
      cards: [{
        icon,
        name: '条件选车',
      }, {
        icon,
        name: '车型对比',
      }, {
        icon,
        name: '口碑查询',
      }, {
        icon,
        name: '配置查询',
      }, {
        icon,
        name: '价格查询',
      }, {
        icon,
        name: '金融贷款',
      }, {
        icon,
        name: '经销商查找',
      }, {
        icon,
        name: '我要吐槽',
      }],
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

  .recommend {
    @include flex(row, flex-start, center);
  }
}
</style>
