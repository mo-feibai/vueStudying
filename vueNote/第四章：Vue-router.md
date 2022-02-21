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