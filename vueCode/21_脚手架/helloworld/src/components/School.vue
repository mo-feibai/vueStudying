<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入 混合
export default {
  name: "School",
  data() {
    return {
      msg:"这是我的学校",
      name:"尚硅谷",
      address: "南京"
    };
  },
};
</script>

<style scoped>
.container {
  background-color: skyblue;
}
</style>