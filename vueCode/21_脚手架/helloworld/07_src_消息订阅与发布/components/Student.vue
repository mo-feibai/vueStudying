<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>性别：{{ gender }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import Pubsub from "pubsub-js"
export default {
  name: "Student",
  data() {
    return {
      name:"张柳",
      gender: "男"
    };
  },
  methods:{
    sendStudentName(){
      Pubsub.publish("studentName",this.name);
    }
  }
};
</script>

<style scoped>
.student {
  background-color: orchid;
  padding:5px;
}
</style>