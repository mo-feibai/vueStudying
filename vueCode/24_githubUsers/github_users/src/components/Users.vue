<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-for="user in userInfo.users" :key="user.node_id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px; border-radius: 50%" />
      </a>
      <p class="card-text" v-text="user.login"></p>
    </div>
    <!-- 展示欢迎词 -->
    <h2 v-show="userInfo.isFirst">欢迎使用</h2>
    <!-- 展示加载动画 -->
    <h2 v-show="userInfo.isLoading">加载中...</h2>
    <!-- 展示错误信息 -->
    <h2 v-show="userInfo.errorMsg">{{ userInfo.errorMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      userInfo: {
        users: [],
        //是否为首次进入页面
        isFirst: true,
        // 是否正在加载
        isLoading: false,
        //错误信息
        errorMsg: "",
      },
    };
  },
  methods: {
    getUserInfo(userInfo) {
      this.userInfo = { ...this.userInfo, ...userInfo };
    },
  },
  mounted() {
    this.$bus.$on("getUserInfo", this.getUserInfo);
  },
  beforeDestroy() {
    this.$bus.$off("getUserInfo");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>