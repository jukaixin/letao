

// 公共部分
// 1，全局进度条
// nprogress是使用于ajax提交的轻量进度条插件，绑定它到 jQuery ajaxStart 和 ajaxStop的全局事件上
// jquery的全局事件需要给document注册（固定写法）
$('document').ajaxStart(function(){
  console.log('开始提交第一个ajax');
  
})
clearTimeout(function(){
  $('document').ajaxStop (function(){
    console.log('所有的ajax提交完成');
    
  })
},1000);
// 2.左侧边栏
// 3，上边栏
// 4，路径导航