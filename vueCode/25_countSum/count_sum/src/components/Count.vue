<template>
  <div>
    <h1>求和信息</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和的十倍为：{{ bigSum }}</h3>
    <h4>当前学校{{ school }}，当前地址{{ address }},我的姓名{{ name }}</h4>
    <h4 style="color: red">下方组件的总人数是:{{ persons.length }}</h4>
    <select v-model.number="selectedNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(selectedNum)">+</button>
    <button @click="minus(selectedNum)">-</button>
    <button @click="addWhenOdd(selectedNum)">当前求和为奇数再加</button>
    <button @click="addLater(selectedNum)">等一会再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      selectedNum: 1,
    };
  },
  methods: {
    ...mapMutations("countSumOptions", {
      add: "ADD",
      minus: "MINUS",
    }),
    ...mapActions("countSumOptions", ["addWhenOdd", "addLater"]),
  },
  computed: {
    ...mapState("countSumOptions", ["school", "address", "name", "sum"]),
    ...mapState("personOptions", ["persons"]),
    ...mapGetters("countSumOptions", ["bigSum"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>