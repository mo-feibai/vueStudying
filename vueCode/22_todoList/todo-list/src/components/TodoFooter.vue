<template>
  <div class="todo-footer" v-show="this.todos.length">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span>
      <span>已完成{{ doneCount }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos"],
  computed: {
    doneCount() {
      return this.todos.filter((todoObj) => todoObj.done === true).length;
    },
    isAll() {
      return this.todos.length > 0 && this.doneCount === this.todos.length;
    },
  },
  methods: {
    checkAll(event) {
      this.$emit('allCheckOrNot',event.target.checked);
    },
    clearAll() {
      if (confirm("确认删除所有已完成？")) {
        this.$emit('deleteAll');
      }
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>