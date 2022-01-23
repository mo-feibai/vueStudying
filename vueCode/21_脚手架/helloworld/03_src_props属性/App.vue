<template>
  <div>
    <Student name="刘霞" gender="女" :age="23"></Student>
    <hr />
    <Student name="刘宇" gender="男"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>
