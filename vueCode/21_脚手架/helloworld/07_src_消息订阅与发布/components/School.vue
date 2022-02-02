<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "南京",
    };
  },
  mounted() {
    this.token = PubSub.subscribe("studentName", (msg, data) => {
      console.log(msg, data);
    });
  },
  beforeDestroy(){
    PubSub.unsubscribe(this.token);
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>