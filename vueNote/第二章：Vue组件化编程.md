# 组件化编程

## 1. 组件的定义

+ 实现应用的<b><font style="background-color:yellow" color="black">局部功能</font></b><b><font style="background-color:red" color="black">代码和资源</font></b>的集合

## 2. Vue使用组件的三大步骤

1. 定义组件

   ```vue
   Vue.extend({
       <!-- 里面和使用new Vue()创建vm时的配置基本相同 -->
   })
   ```

2. 注册组件
   + 局部注册
     + new Vue() 时配置components：{组件名：定义组件时取的名}配置项
   + 全局注册
     + Vue.component("组件名",组件)
3. 使用组件
   ``<school></school>``

> 定义组件时el不要写（最终所有的组件都要经过vm的管理，由vm决定组件的服务对象）<br>
> 定义组件data必须写成函数（防止造成引用关系，导致一处引用时其他引用也会改变）<br>
> 使用template配置组件结构

## 3. 几个注意点

+ 关于组件名
  + 一个单词组成
    + 第一种写法（首字母小写）：school
    + 第二种写法（首字母大写）：School
  + 多个单词组成
    + 第一种写法（kebab-case命名）：my-school
    + 第二种写法（CamelCase命名）：MySchool <font color=green>(必须使用Vue脚手架)</font>
  + 注意
   > 组件命名回避html中已有的元素名称<br>
   > 可以使用name配置项指定组件在开发者工具中呈现的名称
+ 关于组件标签
  + 第一种写法：``<school></school>``
  + 第二种写法：``</school>``
  >不使用脚手架时，使用``</school>``会导致后续组件不能使用
+ 简写方式

  ```vue
  const school = Vue.extend(options) =>   const school = options
   ```

## 4. VueComponent

+ school组件本质上时一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend()生成的

+ 我们只需要写``<school/>``或``<school></school>``,Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行new VueComponent(options)语法

+ <b><font style="background-color:red" color="black">特别注意：每次调用Vue.extend(),返回的都是一个全新的VueComponent()(生成一个新的函数)</font></b>
+ 关于this指向
  + 组件配置中
    + data函数，methods中的函数，computed中的函数，他们的this均为【VueComponent实例对象】
  + new Vue()配置中
    + data函数，methods中的函数，computed中的函数，他们的this均为【Vue实例对象】

## 5. Vue CLI

+ 脚手架文件结构

```tree
.
├── node_modules
├── babel.config.js
├── package.json
├── public
|   ├── favicon.ico
|   └── index.html
├── README.md
├── src
|   ├── App.vue
|   ├── assets
|   |   └── logo.png
|   ├── components
|   |   ├── School.vue
|   |   └── Student.vue
|   └── main.js
├── vue.config.js
└── yarn.lock
```

+ 默认配置
  + 使用 vue inspect > output.js可以查看vue脚手架默认配置
  + 在package.json同级页面创建vue.confg.js可以定制配置

## 6. ref属性

+ 被用来给元素或者子组件注册引用信息（id的替代者）
+ 应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象
+ 使用方式
  + ``<h1 ref="title">标题</h1>``
  + ``this.$refs.xxx`` --xxx为ref中的值

## 7. 配置项props

+ 功能：让组件接受外部传过来的数据
+ 传递数据：``<Demo name="xxx"></Demo>`` --name为传递的key,xxx为传递的值
+ 接收数据
  + 简单方式：``props:["name"]``  --name为外部传递的key
  + 限制类型：

    ```vue
    props:{
      // name为外部传递的key,String为限定的传递的值的类型
      name:String
    }
    ```

  + 限定类型且设置默认值

    ```vue
    props:{
      // name为传递的key，type为传递数据的类型，required限制是否必须传递，default当 reqauired为false时配置，设置不传的时候的默认值
      name:{
        type:String,
        required:true,
        (default:"张三")
      }
    }

+ 当需要传递的数据为数字时，可以使用``<Demo :age="18">``防止传入的为字符串

+ props默认为只读的，Vue底层会监测对props的数据的修改，如果确实需要修改，可以将props传入的数据copy到data中，对data的相应数据修改

+ 子组件向父组件传递数据时，需要父组件先向子组件传递一个函数，子组件调用该函数，并传入参数，父组件就是获得传入的参数

## 8. 配置项mixin（混合/混入）

+ 把多个组件公用的配置提取为一个混入对象共同使用

+ 使用方式：

    ```vue
    // 定义混合
    {
      data(){xxx},
      mounted:{xxx},
      methods:{xxx}
    }
    ```

  + 使用混合
    + 全局混入：Vue.mixin(xxx)
    + 局部混入：new Vue({mixin:[xxx]})

## 9. Vue插件

+ 用于增强vue

+ 包含install方法的一个对象，install的第一个参数为Vue,第二个以后传递的参数为插件使用者传递的数据

+ 定义插件
  + 对象.install = function(Vue,options){}
+ 使用插件：Vue.use(插件)

## 10. scoped

+ 作用：样式旨在当前组件生效
+ ``<style scoped>``

## 11. 浏览器的本地存储

+ 存储内容大小一般支持5Mb左右（不同浏览器可能不同）
+ 浏览器通过Window.sessionStorage 和 Window.localStorage属性实现本地存储机制
+ 相关API
  + xxxStorage.setItem(key, value) --- 添加，如果key存在，则更新
  + xxxStorage.getItem(key) --读取，如果key不存在，返回null
  + xxxStorage.removeItem(key) --删除
  + xxxStorage.clear()  --清空
+JSON.parse(null)的结果仍然为null

## 12. 组件的自定义事件

+ 一种组件间的通信方式，使用于 ： 子组件==> 父组件
+ 使用场景：A为父组件，B为子组件，B想给A传数据，就在A中给B绑定自定义事件（事件的回调在A中）

+ 绑定自定义事件：
  + 第一种方式：在父组件中``<Demo @atguigu="test"></Demo>``或``<Demo v-on:atguigu="test"></Demo>``

  + 第二种方式：在父组件中

    ```vue
    <Demo ref="test">
    ...
    mounted(){
      this.$refs.test.$on(事件名称,回调方法)
    }
    ```

  + 要获取的数据如果为多个时，可以通过对象传递或者使用``...参数名``的形式传递

  + 若想让自定义事件只能触发一次，可以加上once修饰符，或$once方法

+ 触发自定义事件：``this.$emit(事件名称,数据)``

+ 解绑自定义事件：``this.$off(事件名称)``

+ 组件上也可以绑定原生DOM事件，需要使用native修饰符

+ 通过``this.$refs.on(事件名称，回调方法)``绑定自定义事件的时候，回调要么配置到methods方法中，用么使用箭头函数，否则this的指向会出现问题

## 13. 全局事件总线

+ 一种组件间通信方式，<font color=red>适用于任意组件间通信</font>

+ 安装全局事件总线：

```vue
new Vue({
  ......
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
})
```

+ 使用数据事件总线
  + 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身

  ```vue
  methods:{
    xxx(data){......}
  }
  ......
  // 绑定事件
  mounted() {
    this.$bus.$on(事件名称,methods中定义的回调函数xxx)
  },
  // 解绑事件
  beforeDestroy(){
    this.$bus.$off(事件名称)
  }
  ```

  + 提供数据

    ```vue
    this.$bus.$emit(事件名称,数据);
    ```

## 14. 消息订阅与发布

+ 使用[pubsub-js](https://github.com/mroderick/PubSubJS/)插件

## 15. nextTick

+ 语法：``this.$nextTick(callback)``

+ 作用：在下一次DOM更新结束后执行指定的回调

+ 用处： 当改变数据后，要基于更新后的DOM执行操作时，要在nextTick的所指定的回调函数中执行

## 16. 动画与过度

+ 作用：在插入，更新或移除DOM元素时，在合适的时候给元素添加样式类名

+ 写法：
  + 准备好样式
    + 元素进入的样式
      + v-enter:进入的起点
      + v-enter-active:进入过程中
      + v-enter-to:进入的终点
    + 元素离开的样式
      + v-leave:离开的起点
      + v-leave-active:离开过程中
      + v-leave-to:离开的终点
  + 使用``<transition></transition>``包裹过度的元素，并配置name属性

    ```vue
    <transition>
      <h1 v-show="!isShow">你好啊</h1>
    </transition>
    ```

  >如果有多个元素需要过渡动画，需要使用``<transitionGroup></transitionGroup>``标签，并为每个元素指定key值<br/>
  > <b><font style="background-color:green" color="black">如果&lt;transition&gt;或&lt;transitionGroup&gt;指定了name属性，则上述的样式类名的开头v改成对应的name值</font></b>
  
## 17. 配置代理服务器

1. 在vue.config.js中添加配置

```vue
devServer:{
  proxy:"代理地址"
}

  > 优点：配置简单，请求资源时直接发给前端
  > 缺点：不能配置多个代理，不能灵活控制请求是否走代理
  > 工作方式：按上述方式配置代理，当请求的资源前端不存在时，才会转发到服务器

2. 编写vue.config.js配置具体代理规则
```vue
    devServer: {
        proxy: {
          // 匹配所有以api开头的路径
            '/api': {
                target: 'http://192.168.245.88:5000',
                // 支持websocket
                ws: true, 
                // 控制请求头中的host值
                changeOrigin: true,
                // 路径重写（正则表达式）
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    }
```

## 18. 插槽

+ 让父组件可以向子组件的指定位置插入html结构，也是一种组件间的通信方式，适用于<font color=red>父组件 ===> 子组件</font>

+ 默认插槽

  ```vue
  // 父组件
      <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
  // 子组件
    <div class="category">
    <h3>{{title}}分类</h3>
    <slot>我是默认值</slot>
  </div>
  ```

+ 具名插槽（区分一个组件内的多个插槽）

  ```vue
  // 父组件
    <Category title="美食">
      <img src="pic.jpg" alt="美食图片" slot="center" />
      <div class="footer" slot="footer">
        <a href="http://www.baidu.com" target="_blank">更多美食</a>
      </div>
    </Category>
  // 子组件
    <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="center">我是默认值</slot>
    <slot name="footer">我是默认值</slot>
  </div>
  ```

  + 父组件中的``slot="center"``也可以写为``v-slot=center``，但此时子组件中的内容需要使用template包裹

+ 作用域插槽
  + <b><font style="background-color:green" color="black">数据在组件自身，但根据数据生成的结构需要组件的使用者决定</font></b>
  
  ```vue
  // 父组件（template必须使用）
    <Category title="游戏">
      <template scope="games">
        <h4 style="color:red" v-for="(item, index) in games.games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  // 子组件
  <div class="category">
    <h3>{{ title }}分类</h3>
      <slot :games="games">我是默认内容</slot>
  </div>
  ```

  + 父组件中的``scope="games"``也可以使用``slot-scope="games"``

  + scope可以接收多个参数，所以scope接收的为一个对象，对象中为子组件发送的一系列参数
