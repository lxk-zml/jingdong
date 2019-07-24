/*var toast = {
  template:'<div></div>',
  props:{},
  mounted(){}
}*/

//4.1导入Toast.vue组件
import Toast from './Toast';

//1创建对象
var toast = {}

//2.给对象添加install   函数中有参数Vue;
toast.install = function (Vue) {
  //3.扩充Vue构造函数的原型 对象 $toast    this.$toast()
  Vue.prototype.$toast = function (options,callback) {
    var obj = Object.assign({
      visible: false,
      time: 5000,
      title: '警告',
      body: '终于成功了',
      callback:()=>{}
    }, options, true);
    callback&&(obj.callback = callback)

    //4.得到Toast.vue组件最终把它渲染成真实浏览器支持的Html元素，再添加到文档中
    //4.2 先对它进行处理 变成组件 构造函数
    var res = Vue.extend(Toast)

    // <Toast></Toast> 表示new组件
    //4.3生成组件实例对象
    var ins = new res({
      propsData: obj,
    });
    //4.4得到真实的dom 必须先通过$mount().$el
    var element = ins.$mount().$el;
    //4.5添加到文件中
    document.body.appendChild(element);
    //4.7 入场动画插入时候是 隐藏插入。插入成功再将其显示，这就有动画
    ins.visible = true;

    //4.6优化 当单击确定或者取消时候把实例对象销毁，并且把真实的dom删除。
    //$on来监听，方法直接写在后面
    ins.$on('del', function () {
      document.body.removeChild(element);
      ins.$destroy();
    })

  }
}


export default toast;

