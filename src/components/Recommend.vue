<template>
  <el-card class="box-card" :card="card">
    <div class="card-icon" :style="cardBg">
    </div>
    <div class="card-text">
      {{name}}
    </div>
  </el-card>
</template>
<script>

export default {
  name: 'Recommend',
  props: {
    card: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      cardBg: {
        backgroundImage: `url(${this.card.icon})`,
      },
      name: this.card.name,
    };
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../assets/css/mixin";

  .box-card {
    @include flex(column, center, center);
    @include width(150px, 150px);
    margin: 10px;
  }

  .card-icon {
    @include width(100px, 100px);
    background-size: 80px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }

  .card-text {
    text-align: center;
  }
</style>
