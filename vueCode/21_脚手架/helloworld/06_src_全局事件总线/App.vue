<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "你好啊！",
    };
  },
  components: {
    Student,
    School,
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
