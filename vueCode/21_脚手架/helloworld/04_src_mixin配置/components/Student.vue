<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>性别：{{ gender }}</h2>
  </div>
</template>

<script>
import {mixin} from "../mixin"
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个程序员",
      name:"张柳",
      gender: "男"
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