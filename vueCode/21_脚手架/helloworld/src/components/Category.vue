<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
      <slot :games="games">我是默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["王者荣耀", "英雄联盟", "绝地求生", "斗地主", "荒野大镖客"],
    };
  },
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