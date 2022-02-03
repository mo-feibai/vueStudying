<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="changeStatus(todo.id)"
        />&nbsp;
        <span v-show="!todo.isEditing">{{ todo.title }}</span>
        <input
          type="text"
          :value="todo.title"
          v-show="todo.isEditing"
          @blur="edited($event, todo)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
      <button
        class="btn btn-success"
        @click="editTodo(todo)"
        v-show="isEditable(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  computed: {
    // 是否可以编辑
    isEditable() {
      return (todo) => {
        return !todo.done && !todo.isEditing;
      };
    },
  },
  methods: {
    changeStatus(id) {
      this.$bus.$emit("getChangeId", id);
    },
    deleteTodo(id) {
      this.$bus.$emit("handleTodo", id);
    },
    editTodo(todoObj) {
      if (todoObj.hasOwnProperty("isEditing")) {
        todoObj.isEditing = true;
      } else {
        this.$set(todoObj, "isEditing", true);
      }
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
    },
    edited(event, todoObj) {
      todoObj.isEditing = false;
      let value = event.target.value.trim();
      if (!value) {
        alert("输入不能为空");
        return;
      }
      this.$bus.$emit("updateTodo", todoObj.id, value);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-left: 5px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}

.todo-enter-active {
  animation: todoAnimation 0.5s ease-in-out;
}

.todo-leave-active {
  animation: todoAnimation 0.5s ease-in-out reverse;
}

@keyframes todoAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>