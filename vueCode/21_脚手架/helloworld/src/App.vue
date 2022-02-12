<template>
  <div class="app">
    <Category title="游戏">
      <template scope="games">
        <ul>
          <li v-for="(item, index) in games.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="games">
        <ol>
          <li v-for="(item, index) in games.games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="games">
        <h4 style="color:red" v-for="(item, index) in games.games" :key="index">{{ item }}</h4>
      </template>
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

