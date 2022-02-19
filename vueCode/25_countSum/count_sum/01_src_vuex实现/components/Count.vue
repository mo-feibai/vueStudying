<template>
  <div>
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <h3>当前求和的十倍为：{{ bigSum }}</h3>
    <h4>当前学校{{ school }}，当前地址{{ address }},我的姓名{{ name }}</h4>
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
    ...mapMutations({
      add: "ADD",
      minus: "MINUS",
    }),
    // add() {
    //   this.$store.commit("ADD", this.selectedNum);
    // },
    // minus() {
    //   this.$store.commit("MINUS", this.selectedNum);
    // },
    // addWhenOdd() {
    //   this.$store.dispatch("addWhenOdd", this.selectedNum);
    // },
    // addLater() {
    //   this.$store.dispatch("addLater", this.selectedNum);
    // },
    // ...mapActions({
    //   addWhenOdd:'addWhenOdd',
    //   addLater:'addLater',
    // }),
    ...mapActions(['addWhenOdd','addLater'])
  },
  computed: {
    //   school(){
    //       return this.$store.state.school;
    //   },
    //   address(){
    //       return this.$store.state.address;
    //   },
    //   name(){
    //       return this.$store.state.name;
    //   },
    // 对象写法
    // ...mapState({
    //     school:"school",
    //     address:"address",
    //     name:"name"
    // }),
    // 数组写法
    ...mapState(["school", "address", "name"]),
    //   bigSum(){
    //       return this.$store.getters.bigSum;
    //   }
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>