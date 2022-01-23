<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入 混合
import {mixin} from "../mixin"
export default {
  name: "School",
  data() {
    return {
      msg:"这是我的学校",
      name:"尚硅谷",
      address: "南京"
    };
  },
  mixins:[mixin]
};
</script>

<style>
.container {
  background-color: skyblue;
}
</style>