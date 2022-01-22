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
