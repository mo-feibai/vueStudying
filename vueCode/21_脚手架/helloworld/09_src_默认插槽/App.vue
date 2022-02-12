<template>
  <div class="app">
    <Category title="美食">
      <img src="pic.jpg" alt="美食图片" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls preload="auto">
        <source src="video.mp4" type="video/mp4"/>
      </video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "大盘鸡"],
      games: ["王者荣耀", "英雄联盟", "绝地求生", "斗地主", "荒野大镖客"],
      films: ["《你好，李焕英》", "《流浪地球》", "《战狼》", "《西红柿首富》"],
    };
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-around;
}
img,video{
  margin: 0 10%;
  width: 80%;
  height: 80%;
}
</style>

