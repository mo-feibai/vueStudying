<template>
  <div class="app">
    <Category title="美食">
      <img src="pic.jpg" alt="美食图片" slot="center" />
      <div class="footer" slot="footer">
        <a href="http://www.baidu.com" target="_blank">更多美食</a>
      </div>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="footer">
        <a href="http://www.baidu.com" target="_blank">单机游戏</a>
        <a href="http://www.baidu.com" target="_blank">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video controls preload="auto" slot="center">
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div class="footer" slot="footer">
        <a href="http://www.baidu.com" target="_blank">经典</a>
        <a href="http://www.baidu.com" target="_blank">热门</a>
        <a href="http://www.baidu.com" target="_blank">推荐</a>
      </div>
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
.app,
.footer {
  display: flex;
  justify-content: space-around;
}
img,
video {
  margin: 0 15%;
  width: 70%;
  height: 70%;
}
</style>

