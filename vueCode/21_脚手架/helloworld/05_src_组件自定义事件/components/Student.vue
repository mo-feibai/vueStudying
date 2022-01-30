<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>性别：{{ gender }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name:"张柳",
      gender: "男"
    };
  },
  methods: {
    sendStudentName(){
      this.$emit("atguigu",this.name);
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