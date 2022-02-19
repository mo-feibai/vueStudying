# 第三章：Vuex

## 1. 定义

+ 专门在Vue中实施集中式状态（数据）管理的一个Vue<font color=red>插件</font>
+ 对Vue应用中多个组件的共享状态进行集中式的管理（读/写）
+ 是一种组件间的通信方式，适用于任意组件间通信

## 2. 搭建环境

1. 创建文件：src/store/index.js

   ```vue
        // 该文件用于创建vuex中最为核心的store

        import Vuex from 'vuex'
        import Vue from 'vue'

        // 使用Vuex插件
        Vue.use(Vuex)

        // 准备actions,用于相应组件中的动作
        const actions = {

        };
        // 准备mutations,用于操作数据（state）
        const mutations = {

        }
        // 准备state,用于存储数据（state）
        const state = {

        }

        // 创建并暴露store
        export default new Vuex.Store({
            actions,
            mutations, 
            state
        })
   ```

2. 在mian.js中创建vm时引入store配置项

    ```vue
        import Vue from 'vue'
        import App from './App.vue'

        // 引入store
        import store from './store'

        Vue.config.productionTip = false


        const vm = new Vue({
        render: h => h(App),
        store
        }).$mount('#app')
    ```

## 3. 使用

+ 组件中读取vuex的数据``$store.state.xxx``

+ 组件中修改vuex的数据``$store.dispatch("修改的方法",修改的变化量)``或``$store.commit("修改的方法",修改的变化量)``

> 如果没有复杂的逻辑，组件中可以越过actions，直接commit联系mutations

## 4. getters的使用

+ 当state中的数据需要经过加工处理后使用时，可以在getters处加工

+ 在store.js中追加getters配置项

```vue
        const getters = {
        bigSum(state) {
            return state.sum * 10;
        }
    }



    // 创建并暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state,
        getters
    })
···

+ 在组件中使用数据``$store.getters.xxx``

## 5. 四个map方法的使用

+ vue自动生成重复的代码

1. mapState -- 映射state中的属性为计算属性

    ```vue 
        // 对象写法
        // ...mapState({
        //     school:"school",
        //     address:"address",
        //     name:"name"
        // }),
        // 数组写法
        ...mapState(["school","address","name"]),
    ```

2. mapGetters -- 映射getters中的数据为计算属性

    ```vue
        ...mapGetters(["bigSum"]),
    ```

3.mapActions -- 生成与actions对话的方法（dispatch方法）

    ```vue
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

        // 需要通过方法传参
        <button @click="addWhenOdd(selectedNum)">当前求和为奇数再加</button>
        <button @click="addLater(selectedNum)">等一会再加</button>
    ```

4. mapMutations -- 生成与mutations对话的方法（commit方法）

    ```vue
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


        <button @click="add(selectedNum)">+</button>
        <button @click="minus(selectedNum)">-</button>
    ```
