# 第四章： Vue-router（路由）

## 1. 定义

+ 一组key,value的对应关系，多个路由需要路由器进行管理（router）

## 2. 基本使用

+ 安装vue-router插件

+ 应用插件``Vue.use(VueRouter)``

+ 创建router文件夹（idnex.js），编写router配置项
  
    ```vue
        // 用于创建整个应用的路由器

        import VueRouter from 'vue-router'
        import About from '../components/About'
        import Home from '../components/Home'

        // 创建并暴露一个路由器
        export default new VueRouter({
        routes: [
        { path: "/about", component: About },
        { path: "/home", component: Home },
        ]
        })
    ```

## 3. 几个注意点

+ 路由组件一般存放到pages文件夹中，一般组件通常存放在components文件夹

+ 通过切换，隐藏的文件夹，默认是被销毁掉的，需要的时候再挂载

+ 每个组件都有自己的$route属性，里面存储自己的路由信息

+ 每个应用只有一个$router

## 4. 嵌套路由（多级路由）

+ 配置规则(注意：第一级路由的path前有/，第二级以及后面的路由path前不用加/)

    ```vue
        export default new VueRouter({
            routes: [
                { path: "/about", component: About },
                {
                    path: "/home", component: Home,
                        children: [
                            { path: "homeNews", component: HomeNews },
                            { path: "homeMessage", component: HomeMessage }
                        ]
                },
            ]
        })
    ```

+ 使用``<router-link class="list-group-item" active-class="active"  to="/home/homeMessage">Message</router-link>`` to属性需要写全路径

## 5. 路由的query参数

+ 传递参数

    ```vue
          <!-- 跳转路由并携带参数，to的字符串写法 -->
      <!-- <li v-for="message in messages" :key="message.id">
      <router-link :to="`/home/homeMessage/messageDetail?id=${message.id}&title=${message.title}`"
      >{{message.title}}</router-link></li> -->

      <!-- 跳转路由并携带参数，to的对象写法 -->
      <li v-for="message in messages" :key="message.id">
        <router-link
          :to="{
            path: '/home/homeMessage/messageDetail',
            query: {
              id: message.id,
              title: message.title,
            },
          }"
          >{{ message.title }}</router-link
        >
      </li>
    ```

+ 接收参数

    ```vue
        this.$route.query;  
    ```

## 6. 命名路由

+ 作用：简化路由的跳转

+ 使用
  + 给路由命名

    ```vue
        {name:"msgDetail", path: "messageDetail", component: MessageDetail }
    ```

  + 简化跳转

    ```vue
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
    ```

## 7. 路由的params参数

1. 配置路由，生命接收params参数

    ```vue
        {name:"msgDetail", path: "messageDetail/:id/:title", component: MessageDetail }
    ```

2. 传递参数

     ```vue
        <li v-for="message in messages" :key="message.id"><router-link :to="`/home/homeMessage/messageDetail/${message.id}/${message.title}`"
      >{{message.title}}</router-link></li>

      // 或者

            <li v-for="message in messages" :key="message.id">
        <router-link
          :to="{
            name:'msgDetail',
            params: {
              id: message.id,
              title: message.title,
            },
          }"
          >{{ message.title }}</router-link>
    ```

    > <b><font style="background-color:red" color="black">路由携带params参数时，如果使用to的对象写法，不能使用path配置项，只能使用name</font></b>

3. 使用

    ``this.$route.params``
