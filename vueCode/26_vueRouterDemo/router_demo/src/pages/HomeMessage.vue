<template>
  <div>
    <ul>
      <!-- 跳转路由并携带参数，to的字符串写法 -->
      <!-- <li v-for="message in messages" :key="message.id"><router-link :to="`/home/homeMessage/messageDetail?id=${message.id}&title=${message.title}`"
      >{{message.title}}</router-link></li> -->

      <!-- 跳转路由并携带参数，to的对象写法 -->
      <!-- <li v-for="message in messages" :key="message.id">
        <router-link
          :to="{
            name:'msgDetail',
            query: {
              id: message.id,
              title: message.title,
            },
          }"
          >{{ message.title }}</router-link
        >
      </li> -->

            <!-- 跳转路由并携带参数，使用params -->
      <li v-for="message in messages" :key="message.id"><router-link :to="`/home/homeMessage/messageDetail/${message.id}/${message.title}`"
      >{{message.title}}</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  data() {
    return {
      messages: [
        {
          id: "001",
          title: "消息001",
        },
        {
          id: "002",
          title: "消息002",
        },
        {
          id: "003",
          title: "消息003",
        },
      ],
    };
  },
};
</script>

<style>
</style>