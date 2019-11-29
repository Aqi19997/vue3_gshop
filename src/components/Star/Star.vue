<template>
  <div class="star" :class="`star-`+size">
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>
  </div>
</template>
<script>
export default {
  name: "Star",
  props: {
    // 设置size的类型
    size: String,
    // 设置score的类型
    score: Number
  },
  //根据用户分数,计算类名字 整数为on 超过0.5为half 其余为off
  // classArr=['on','on','on','half','off',]
  computed: {
    classArr() {
      // 定义数组,用来存储类样式的名字
      const clsArr = [];
      // 先获取分数
      const { score } = this;
      // 3.7
      //----计算的是on的个数
      let scoreInt = Math.floor(score);
      for (let i = 0; i < scoreInt; i++) {
        clsArr.push("on");
      }
      //-----计算的half的个数
      if (score * 10 - scoreInt * 10 >= 5) {
        clsArr.push("half");
      }
      //-----计算的off的个数
      while (clsArr.length < 5) {
        clsArr.push("off");
      }
      return clsArr;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.star // 2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star48_on')
      &.half
        bg-image('./images/stars/star48_half')
      &.off
        bg-image('./images/stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star36_on')
      &.half
        bg-image('./images/stars/star36_half')
      &.off
        bg-image('./images/stars/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star24_on')
      &.half
        bg-image('./images/stars/star24_half')
      &.off
        bg-image('./images/stars/star24_off')
</style>
