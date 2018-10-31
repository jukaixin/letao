


$(function(){
// 需要实现的功能：
// 1.bootstrap-validator插件会在表单提交的时候进行校验
// 如果校验成功了，表单会继续提交，但是如果校验失败了，就会阻止表单的提交。
// 表单提交的时候，进行校验，校验成功，继续提交，验证失败，阻止表单提交
//使用表单校验插件
$(formSelector).bootstrapValidator({
  //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
  excluded: [':disabled', ':hidden', ':not(:visible)'],

  //2. 指定校验时的图标显示，默认是bootstrap风格
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },

  //3. 指定校验字段
  fields: {
    //校验用户名，对应name表单的name属性
    username: {
      validators: {
        //不能为空
        notEmpty: {
          message: '用户名不能为空'
        },
        //长度校验
        stringLength: {
          min: 6,
          max: 30,
          message: '用户名长度必须在6到30之间'
        },
        //正则校验
        regexp: {
          regexp: /^[a-zA-Z0-9_\.]+$/,
          message: '用户名由数字字母下划线和.组成'
        }
      }
    },
  }

});
})