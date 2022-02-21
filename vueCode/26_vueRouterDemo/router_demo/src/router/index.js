// 用于创建整个应用的路由器

import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'

// 创建并暴露一个路由器
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