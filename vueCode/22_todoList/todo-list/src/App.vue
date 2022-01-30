<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="getTodo"></TodoHeader>
        <Todos
          :todos="todoArr"
          :getChangeId="getChangeId"
          :handleTodo="handleTodo"
        ></Todos>
        <TodoFooter
          :todos="todoArr"
          @allCheckOrNot="allCheckOrNot"
          @deleteAll="deleteAll"
        ></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import Todos from "./components/Todos.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    Todos,
    TodoFooter,
  },
  data() {
    return {
      todoArr: [],
      doneCount: 0,
    };
  },
  methods: {
    // 获取header中添加的数据
    getTodo(todoObj) {
      this.todoArr.unshift(todoObj);
    },
    //改变todo的状态
    getChangeId(id) {
      this.todoArr.forEach((todoObj) => {
        if (todoObj.id === id) {
          todoObj.done = !todoObj.done;
          return;
        }
      });
    },
    handleTodo(id) {
      if (confirm("确认删除吗？")) {
        for (const index in this.todoArr) {
          if (this.todoArr[index].id === id) {
            this.todoArr.splice(index, 1);
          }
        }
      }
    },
    allCheckOrNot(isDone) {
      this.todoArr.forEach((todoObj) => (todoObj.done = isDone));
    },
    deleteAll() {
      this.todoArr = this.todoArr.filter((todoObj) => !todoObj.done);
    },
  },
  watch: {
    todoArr: {
      deep: true,
      handler(value) {
        localStorage.setItem("todoArr", JSON.stringify(value));
      },
    },
  },
  mounted() {
    let todoArr = JSON.parse(localStorage.getItem("todoArr"));
    if (todoArr) {
      this.todoArr = todoArr;
    }
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
