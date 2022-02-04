<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="请输入搜索关键词"
        v-model="queryKeyword"
        @keyup.enter="searchUsers"
      />&nbsp;<button @click="searchUsers">搜索</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      queryKeyword: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("getUserInfo", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        users: [],
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.queryKeyword}`)
        .then((response) => {
          this.$bus.$emit("getUserInfo", {
            isLoading: false,
            errorMsg: "",
            users: response.data.items,
          });
        })
        .catch((error) => {
          this.$bus.$emit("getUserInfo", {
            isLoading: false,
            errorMsg: error.message,
            users: [],
          });
        });
    },
  },
};
</script>
