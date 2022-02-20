<template>
  <div>
    <h1>人员列表</h1>
    <h4 style="color: red">上方组件求和为：{{ sum }}</h4>
    <h4>列表中第一个人的名字是:{{ lastPersonName }}</h4>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <ul>
      <li v-for="person in persons" :key="person.id">
        <img v-if="person.url" :src="person.url">
        {{ person.name }}
        <button @click="getAvatar(person.id)">获取头像</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Persons",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.personOptions.persons;
    },
    sum() {
      return this.$store.state.countSumOptions.sum;
    },
    lastPersonName() {
      return this.$store.getters["personOptions/firstPersonName"];
    }
  },
  methods: {
    addPerson() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      this.name = "";
      this.$store.commit("personOptions/ADD_PERSON", personObj);
    },
    addPersonWang() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      this.name = "";
      this.$store.dispatch("personOptions/addPersonWang", personObj);
    },
    getAvatar(id) {
      this.$store.dispatch("personOptions/addPersonAvatar", id);
    },
  },
};
</script>

<style>
img {
  height:40px;
  width:40px;
  border-radius: 50%;
  vertical-align:middle;
  margin-right:10px;
}
li{
  list-style: none;
  margin-bottom: 5px;
}
</style>