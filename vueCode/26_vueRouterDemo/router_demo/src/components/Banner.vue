<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="goBack()">后退</button>
    <button @click="goAhead()">前进</button>
    <button @click="testGo()">测试一下go</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    goBack() {
      this.$router.back();
    },
    goAhead() {
      this.$router.forward();
    },
    testGo(){
      this.$router.go(1);
    }
  },
};
</script>

<style>
</style>