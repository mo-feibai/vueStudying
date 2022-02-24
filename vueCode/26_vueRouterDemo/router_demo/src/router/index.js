// 用于创建整个应用的路由器

import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'
import MessageDetail from '../pages/MessageDetail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        { name: "aboutThis", path: "/about", component: About },
        {
            path: "/home", component: Home,
            children: [
                { path: "homeNews", component: HomeNews },
                {
                    path: "homeMessage",
                    component: HomeMessage,
                    children: [
                        {
                            name: "msgDetail", path: "messageDetail/:id/:title", component: MessageDetail,
                            // props的第一种写法：对象
                            // props:{
                            //     a:1,
                            //     b:"hello"
                            // }
                            // props的第二种写法：布尔值
                            // props:true
                            // props的第二种写法：函数
                            props({params}) {
                                return { id: params.id, title: params.title }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})