
// 功能：
// 1.进行表单验证
$(function(){
  //使用表单校验插件
$('#form').bootstrapValidator({
  //2. 指定校验时的图标显示，默认是bootstrap风格
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',//成功显示的图标
    invalid: 'glyphicon glyphicon-remove',//失败时显示的图标
    validating: 'glyphicon glyphicon-refresh'//验证中
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
          min: 2,
          max: 6,
          message: '用户名长度必须在2到6之间'
        },
        // --------
        callback:{
          message:"用户名不存在"
        }
      }
    },
    password: {
      validators: {
        //不能为空
        notEmpty: {
          message: '密码不能为空'
        },
        //长度校验
        stringLength: {
          min: 6,
          max: 12,
          message: '密码长度必须在2到6之间'
        },
        // 
        callback:{
          message:"密码错误"
        }
      }
    },
  }

});
})

// 2.登录功能
// 成功跳转，不成功提示
$("#form").on('success.form.bv', function (e) {
  e.preventDefault();
  //使用ajax提交逻辑
  $.ajax({
    type:'post',
    url:'/employee/employeeLogin',
    data:$('form').serialize(),
    dataType:'json',
    success:function(info){
      // console.log("使用了ajax提交");
      console.log(info);
      if (info.success) {
        location.href='index.html';
      }
      if(info.error=== 1000) {
        // alert(info.message); 
         //获取表单校验实例//使用表单校验实例可以调用一些常用的方法。
        // 调用插件实例方法，更新校验状态成失败
        $("#form").data('bootstrapValidator').updateStatus('username', 'INVALID','callback');
      }
      if(info.error=== 1001) {
        // alert(info.message);
        $("#form").data('bootstrapValidator').updateStatus('password', 'INVALID','callback');
      }
      
    },
  });
});

// 重置功能：
// 因为其重置不了状态，
// 重置表单中设置过校验的内容，将隐藏所有错误提示和图标。
$('[type="reset"]').click (function(){
  $('#form').data("bootstrapValidator").resetForm(true);
  // validator.resetForm();//重置表单，并且会隐藏所有的错误提示和图标
})
    




