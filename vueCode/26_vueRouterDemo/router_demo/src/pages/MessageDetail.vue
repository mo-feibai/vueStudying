<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
    <input type="text">
    <!-- <li>a: {{ a }}</li>
    <li>b: {{ b }}</li> -->
  </ul>
</template>

<script>
export default {
  name: "MessageDetail",
  computed: {
    message() {
      return this.$route.query;
    },
    // messageParams() {
    //   return this.$route.params;
    // },
  },
  //   mounted() {
  //     console.log(this.$route);
  //   },
  props: ["id", "title"],
};
</script>
