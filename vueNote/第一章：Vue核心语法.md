# 第一章：Vue核心语法

## 1.1 模板语法

+ 插值语法
  + 用于解析标签体内容
  + {{xxx}},其中xxx为js表达式，可以直接读取到data中的所有的属性
+ 指令语法
  + 用于解析标签<font color=yellow>（标签属性，标签体内容，绑定事件）</font>
  + 举例(v-bind可以简写为 <font color=red>**:**</font>)
  
  ```vue
   <a v-bind:href="url"> 
  ```

## 1.2 数据绑定

### 单向数据绑定（v-bind）

+ 数据只能从data流向页面

### 双向数据绑定（v-model)

+ 数据不仅能从data流向页面，还能从页面反馈回data

  > <font color=red>双向绑定一般只应用于表单元素</font><br/>
  > v-model:value可以简写为v-model，因为v-model默认收集表单元素的value值
  >
## 1.3 el与data的两种写法

+ el的两种写法

  ```vue
  // 第一种写法
  new Vue({
    el:"#root",
    data:
  })
  
  // 第二种写法
  const vm = new Vue({
    data:
  });
  vm.$mount("#root");
  ```

+ data的两种写法

  ```vue
  // 对象式
  data:{
    name:"尚硅谷"
  }

  // 函数式
  data: function(){
    return {
      name:"尚硅谷"
    }
  }
  ```

  > <font color=orange>由vue管理的函数，不能写为箭头函数，因为箭头函数的this为Window,而不是vue实例</font>

## 1.4 MVVM模型

+ M - 模型（Model）,对应vue data中的数据
+ V - 视图（View）,对应vue的模板
+ VM - 视图模型（ViewModel），对应Vue的实例对象
![MVVM模型](https://gitee.com/mofeibai/md-pics/raw/master/vueCode/MVVM模型.jpg)
+ data中的所有属性，最后都出现在vm上
+ data中的所有属性，以及vm上的属性，方法以及vm原型中的属性/方法，模板都能使用

## 1.5 数据代理

### Object.defineProperty()

  ```js
     let person = {
       name:"张三",
       gender:"男",
   }
/*    Object.defineProperty(person,'age',{
       value:18,
       // 控制属性是否可以被枚举
       enumerable:true,
       // 控制属性是否可以被修改
       writable:true,
       // 控制属性是否可以被删除
       configurable:true
   }) */

//    console.log(person);
//    console.log(Object.keys(person));
//    person.age = 20;
//    console.log(person);
let number = 18;
Object.defineProperty(person,"age",{
    // 当读取person的age属性时，get()函数被调用，且返回值为age的值
    get(){
        return number;
    },
      // 当修改person的age属性时，get()函数被调用，且收到为age的值
    set(value){
        console.log(value);
        number = value;
    }
})
  ```

### 数据代理

+ 通过一个对象代理另一个对象中属性的操作
  ![vue中的数据代理](https://gitee.com/mofeibai/md-pics/raw/master/vueCode/vue%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86.png)
+ 通过Object.defineProperty()把data对象上的所有属性添加到vm上。为每一个添加到vm上的属性
    ,都指定一个getter/setter。在setter/getter中内部去操作data中的对应属性

## 1.6 事件处理

+ 使用v-on:xxx或者@xxx绑定事件
+ 事件的回调函数需要配置在methods对象上，最终到vm上
+ methods中配置的回调函数，不能使用箭头函数（箭头函数没有this，this会最终指代window而不是vm）
+ @click与@click($event)一致，但是后者可以传参

### vue中的事件修饰符

1. prevent: 阻止默认事件
2. stop： 阻止事件冒泡
3. once： 事件只触发一次
4. capture：使用事件的捕获模式
5. self：只有event.target是当前操作的元素才触发事件
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕

> 事件修饰符可以连点（keyup.prevent.stop）

### vue中的按键别名

1. 回车  enter
2. 删除  delete(捕获删除和退格键)
3. 退出  esc
4. 空格  space
5. 换行  tab <b><font style="background-color:cyan" color="black">(必须配合keydown使用)</font></b>
6. 上  up
7. 下 down
8. 左  left
9. 右  right

> 1. Vue未提供别名的按键，可以使用按键原始的key（event.key）值取绑定，<b><font style="background-color:yellow" color="black">但注意多个单词要转为kebab-case(短横线命名)</font></b> <br/>
> 2. 系统修饰键：ctrl/alt/shift/meta
>
>>配合keyup使用:按下修饰键的同时，再按下其他键，随后释放其他键，事件才触发<br/>
>>配合keydwon使用，正常触发事件 <br/>
>>可以连点（keyup.ctrl.y，只有ctrl+y才能触发）

+ 可以使用keyCode去指定具体的按键（不推荐）
+ Vue.config.keyCodes.自定义键名 = 键码可以自定义按键别名

## 1.7 计算属性

+ 定义：要用的属性不存在，要通过已有的属性计算得来
+ 原理：底层借助Object.defineProperty()方法提供的getter与setter
+ get()函数执行的时机：
  + 初次读取时执行一次
  + 当依赖的数据发生改变时会被再次调用
+ 优势：与methods相比，内部有缓存机制（复用），效率更高，调试方便

> 计算属性最终出现在vm上，像普通属性一样读取就行<br/>
> 如果计算属性要被修改，必须写setter函数相应修改，且set函数中要引起计算属性所依赖的属性的变化

+ 计算属性简写
  + 如果确定不需要修改计算属性，可以直接省略setter函数，并将get函数作为计算属性的值
  
  ```vue
  computed:{
    fullName(){
      return this.firstName + '-' + this.lastName;
    }
  }
  ```

## 1.8 监视属性

+ 当被监视的属性变化时，回调函数自动调用，进行相关操作
+ 监视的属性必须存在
+ 监视的两种方法
  + new Vue时传入watch配置

  ```vue
  watch:{
    // xxx被监视的属性
    xxx:{
      handler(newVal,oldVal){

      }
    }
  }
  ```

  + vm.$watch(xxx,{handler(){}})

### 深度监视

+ vue中的watch默认不监视对象内部值的改变
+ <b><font style="background-color:green" color="black">配置deep:true</font></b>可以监测到对象内部改变

### computed与watch的区别

+ watch可以完成异步操作，computed不能完成（computed依靠return获得结果，将操作结果返回给了setTimeout，而不是计算属性，计算属性无返回值）
  + 所有被vue管理的函数，最好写为普通函数，这样this才为vm或组件实例对象
  + 所有不被vue管理的函数<b><font style="background-color:red" color="black">(定时器的回调函数，ajaxd的回调函数,Promise的回调函数)</font></b>，必须写为箭头函数，此时this为上一层的vm

## 1.9 绑定样式

### class样式

+ 写法

  ```html
  <!-- xxx 可以是字符串/对象/数组 -->
  <h2 :style="xxx">
  ```

+ 字符串写法适用于 - 类名不确定，需要动态获取
+ 对象写法适用于 - 要绑定多个样式，个数不确定，名字也不确定
+ 数组写法适用于 - 要绑定多个样式，个数确定，名字也确定，但不确定用不用

### style样式

+ :style="{fontSize:xxx}"  -xxx为动态的 <b><font style="background-color:yellow" color="black">（其中如果原css中有横线的，要改成驼峰写法）</font></b>

+ :style="[a,b]",其中a,b是样式对象

## 1.10 条件渲染

1. v-if

   + 写法

     ```vue
     (1) v-if="表达式"
     (2) v-else-if="表达式"
     (3) v-else
     ```

   + 适用于切换频率较低的场景
   + 不展示的DOM元素直接被移除
   + v-if 可以和v-else-if v-else一起使用，但中间结构不能被打断

2. v-show

+ 写法

    ```vue
  (1) v-show="表达式"
    ```

+ 适用于切换频率较高的场景
+ 不展示的DOM未被移除，仅仅是使用样式隐藏掉

## 1.11 列表渲染

### v-for指令

+ 用于展示列表数据
+ 语法

    ```vue
    v-for="(item index) in xxx" :key="index"
    ```

+ 可以遍历数组（item,index）/对象(value,key)/字符串(char,index)/指定次数(number,index)--即从1数到n

### key的作用

+ 虚拟DOM中key的作用
  + key是虚拟DOM对象的标识，当状态中的数据发生变化时，vue根据“新数据”生成新的“虚拟DOM”,随后vue进行“新的虚拟DOM”与“旧的虚拟DOM“的差异比较，比较规则如下：
    + 旧的虚拟DOM中找到与新的虚拟DOM相同的key
      + 若虚拟DOM中内容没变，直接使用旧的虚拟DOM
      + 若虚拟DOM中内容改变，则生成新的真实DOM,替换页面中之前的真实DOM
    + 旧的虚拟DOM中未找到与新的虚拟DOM相同的key
      + 创建新的真实DOM,随后渲染到页面

+ 使用index作为key可能引发的问题
  + 若对数据进行逆序添加/逆序删除等破环顺序的的操作：会产生没有必要的真实DOM更新，=》界面效果没有问题，效率低
  + 如果结构中含有输出类DOM: 会产生错误的DOM更新 =》 界面有问题

+ 开发中使用key
  + 最好使用每条数据唯一标识作为key,比如id 手机号 身份证号 学号等作为唯一标识
  + 如果不存在对于数据的逆序添加。逆序解除等破环顺序的操作，仅用于渲染列表的展示，使用index作为key是没有问题的

## 1.12 数据监测

+ vue会监视data中所有层次的数据
+ 怎样监测对象中的数据
  + 通过setter实现监视，且要在new Vue时传入待监测的数据
    1. 对象中后追加的属性，Vue默认不做响应式处理
    2. 如需为后添加的属性做响应式，需要使用Vue.set(target,key,value) (或vm.$set(xxx))

+ 如何监测数组中的数据
  + 通过包裹数组中更新元素的方法实现，本质就是做了两件事
    1. 调用数组原型上的原生方法对数组进行修改
    2. 重新解析模板，返回更新后的页面
+ 在Vue中修改数组中的某个元素，一定要用
  > push() pop() shift() unshift() splice() sort() reverse() <br/>
  >Vue.set() 或 vm.$set()  -- 其中key 为元素在数组中的索引

+ <b><font style="background-color:green" color="black">使用Vue的set，不能作用于vm或vm的根数据(vm._data)</font></b>

## 1.13 收集表单数据

+ ``<input type="text">`` v-model收集的为value值，且用户输入默认为value值
+ ``<input type="radio">`` v-model收集的为value值，需要给标签配value值
+ ``<input type="checkbox">``
  + 如果没有配置标签的value属性，则v-model收集的为checked(是否勾选)
  + 如果配置了value值，且vm data中初始值为字符串，则收集checked
  + 如果配置了value值，且vm data中初始值为数组，则收集checked
+ v-model的三个修饰符
  + <font color=orange>trim</font>   --  去除收集字符串的前后空格
  + <font color=orange>number</font>  -- 将收集的字符串转换为数字，如果出现字母会截掉处理，配合``type="number"``标签使用
  + <font color=orange>lazy</font> -- 只有在当前输入框失去焦点才收集数据

## 1.14 过滤器

+ 定义： 对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
+ 语法：
  1. 注册过滤器：Vue.filter(name,function(){})--全局过滤器 new Vue(filters:{}) -- 局部过滤器
  2. 使用过滤器：{{xxx | 过滤器名称}}  或  v-bind 属性  :xxx="xxx | 过滤器名"
  > 过滤器可以接受额外参数，多个过滤器也可以串联 <br>
  > 并没有改变原本的数据，是产生新的相应的数据

## 1.15 内置指令

1. v-text

   + 作用： 向所在的节点中渲染文本内容
   + 与插值语法的区别：v-text会替换掉节点中的原有内容
2. v-html
   + 作用：向页面中渲染html内容
   + 与插值语法的区别
     + v-html会替换掉节点中的原有内容
     + v-html可以识别html结构
   + v-html存在安全性问题
     + 在网站上任意渲染html是危险的，容易导致xss攻击
     + 一定要在可信的内容上使用v-html，永远不要在用户的提交内容上
3. v-cloak
   + 没有值，本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删除v-cloak属性
   + 使用css配合v-cloak可以解决网速慢时页面显示出{{xxx}}(夜未眠闪现)的问题
4. v-once
   + 没有值，v-once所在节点在初次动态渲染后，就视为静态内容了
   + 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能
5. v-pre
   + 没有值，跳过其所在节点的编译过程
   + 可以利用它跳过：没有使用节点语法，没有使用插值语法的节点，会加快编译

## 1.16 自定义指令

+ 定义语法
  + 局部指令

  ```vue
  new Vue({
    directives:{
      自定义指令名:{
        // 常用的3个钩子
        // 指令与元素成功绑定时调用（通常写样式等不需要有实际页面存在的操作）
        bind(){},
        // 指令所在元素被插入页面时调用（获取焦点，获取父元素等特殊操作）
        inserted(){},
        // 指令所在模板结构被重新解析时调用
        update(){}
      }
    }
  })

  // 或者
  new Vue({
    directives:{
      自定义指令名(){}
    }
  })
  ```

  + 全局指令

  ```vue
  Vue.directive(指令名,配置对象/回调函数)
  ```

> 指令定义时不需要加v-，但是调用时需要加v- <br>
> 指令名如果为<b><font style="background-color:red" color="black">多个单词，需要使用kebab-case命名方式</font></b>，不要使用驼峰命名

## 1.17 vue的生命周期

![vue的生命周期钩子](https://gitee.com/mofeibai/md-pics/raw/master/vueCode/vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

+ 常用的生命周期钩子
  1. mounted: 发送ajax请求，启动定时器，绑定自定义事件，订阅消息等<font color=red>（初始化操作）</font>
  2. beforeDestroy：清除定时器，解绑自定义事件,取消订阅消息等<font color=red>（收尾工作）</font>
+ 关于销毁vue实例
  + 销毁后借助的vue开发者工具看不到任何信息
  + 销毁后自定义事件会失效，但原生DOM事件仍然有效
  + 一般不会在beforeDestroy中操作数据，因为即使操作数据，也不会触发更新流程
