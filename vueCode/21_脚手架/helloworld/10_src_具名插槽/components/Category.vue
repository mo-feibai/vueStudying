<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="center">我是默认值1</slot>
    <slot name="footer">我是默认值2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"]
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  height: 300px;
  width: 200px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>