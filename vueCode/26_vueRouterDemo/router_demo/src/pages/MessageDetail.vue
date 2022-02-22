<template>
  <ul>
    <li>消息编号：{{ messageParams.id }}</li>
    <li>消息标题：{{ messageParams.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "MessageDetail",
  computed: {
    message() {
      return this.$route.query;
    },
    messageParams() {
      return this.$route.params;
    },
  },
//   mounted() {
//     console.log(this.$route);
//   },
};
</script>
