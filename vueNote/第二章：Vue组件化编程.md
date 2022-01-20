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
