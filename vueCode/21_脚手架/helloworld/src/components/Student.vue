<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>性别：{{ gender }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个程序员",
    };
  },
  // props:["name","gender","age"]
  /*   props: {
    name: String,
    gender: String,
    age: Number,
  }, */
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 1
    },
  },
};
</script>

<style>
.container {
  background-color: skyblue;
}
</style>