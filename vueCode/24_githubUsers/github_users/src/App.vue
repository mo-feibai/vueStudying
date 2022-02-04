<template>
    <div class="container">
      <Search />
      <Users />
    </div>
</template>

<script>
import Search from "./components/Search.vue";
import Users from "./components/Users.vue";

export default {
  name: "App",
  components: {
    Search,
    Users,
  },
};
</script>

<style>

</style>
