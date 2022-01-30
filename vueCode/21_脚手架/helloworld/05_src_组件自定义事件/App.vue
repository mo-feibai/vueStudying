<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <Student v-on:atguigu="getStudentName"></Student>
    <School :getSchoolName="getSchoolName"></School>
  </div>
</template>

<script>
import School from "./components/School.vue"
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      msg:"你好啊！"
    }
  },
  components: {
    Student,
    School
  },
  methods: {
    getSchoolName(name){
      console.log("app收到了学校名:",name);
    },
    getStudentName(name){
      console.log("demo被调用了",name);
    }
  }
};
</script>

<style>
 .app{
   background-color:gray;
  padding: 5px;
 }
</style>
