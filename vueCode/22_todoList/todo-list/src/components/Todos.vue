<template>
  <ul class="todo-main">
    <Todo
      v-for="item in todos"
      :key="item.id"
      :todo="item"
    ></Todo>
  </ul>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  name: "Todos",
  components: {
    Todo,
  },
  props: ["todos"],
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>