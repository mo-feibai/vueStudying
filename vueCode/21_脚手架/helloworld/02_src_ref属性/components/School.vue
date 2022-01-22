<template>
  <div class="container">
    <h2>学校的名称：{{ name }}</h2>
    <hr />
    <h2>学校的地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name:"School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>

<style>
.container{
  background-color:skyblue
}
</style>