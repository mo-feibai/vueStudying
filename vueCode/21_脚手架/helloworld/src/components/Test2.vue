<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}
/* 进入的起点 */
.v-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.v-enter-to {
  transform: translateX(0);
}
/* 离开的起点 */
.v-leave {
  transform: translateX(0);
}
/* 离开的终点 */
.v-leave-to {
  transform: translateX(100%);
}
</style>