<template>
  <div class="app">
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudent() {
      axios
        .get("http://192.168.245.88:8080/api/students")
        .then((response) => {
          console.log("请求成功了");
          console.log(response.data);
        })
        .catch((error) => {
          console.log("请求失败了");
          console.log(error.message);
        });
    },
  },
};
</script>

