// 用于创建整个应用的路由器

import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'
import MessageDetail from '../pages/MessageDetail'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        { name: "aboutThis", path: "/about", component: About, meta: { title: "关于" } },
        {
            path: "/home", component: Home, meta: { title: "主页" },
            children: [
                { path: "homeNews", component: HomeNews, meta: { isAuthenticated: true, title: "新闻" } },
                {
                    path: "homeMessage",
                    component: HomeMessage,
                    meta: { isAuthenticated: true, title: "消息" },
                    children: [
                        {
                            name: "msgDetail", path: "messageDetail/:id/:title", component: MessageDetail, meta: { isAuthenticated: true, title: "消息详情" },
                            // props的第一种写法：对象
                            // props:{
                            //     a:1,
                            //     b:"hello"
                            // }
                            // props的第二种写法：布尔值
                            // props:true
                            // props的第二种写法：函数
                            props({ params }) {
                                return { id: params.id, title: params.title }
                            },
                            // beforeEnter: (to, from, next) => {
                            //     // 判断是否需要鉴权
                            //     if (to.meta.isAuthenticated) {
                            //         if (localStorage.getItem("name") === 'mofeibai') {
                            //             next();
                            //         } else {
                            //             alert("您没有权限");
                            //         }
                            //     } else {
                            //         next();
                            //     }
                            // }
                        }
                    ]
                }
            ]
        },
    ]
});
// router.beforeEach((to, from, next) => {
//     // 判断是否需要鉴权
//     if (to.meta.isAuthenticated) {
//         if (localStorage.getItem("name") === 'mofeibai') {
//             next();
//         } else {
//             alert("您没有权限");
//         }
//     } else {
//         next();
//     }
// })

// router.afterEach((to) => {
//     let title = to.meta.title;
//         document.title = title;
// })

export default router;
