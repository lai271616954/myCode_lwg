$(function(){
    //表单部分
    let phonetemp=false;
    let mestemp=false;
    let pwdtemp=false;
    $('.region').change(function(){
        $('.country_code').text($('.region').val());
    })
    $('.phone_number').focus(function(){
        $(this).css({
            border:'2px solid red'
        })
        $('.err-tip').html('请输入手机号')
        $('.err-tip').show();
        $(this).css({
            border:'2px solid red'
        })
    })
    $('.phone_number').blur(function(){
            $('.err-tip').hide();
            $(this).css({
                border:'1px solid #dbdbdb'
            })
    })
    $('.phone_number').bind('input propertychange',function(){
    let regnum=/^1(3|4|5|7|8)\d{9}$/
        if(regnum.test($('.phone_number').val())==true){
            $('.err-tip').hide();
            $(this).css({
                border:'1px solid #dbdbdb'
            })
            phonetemp=true;
        }
        else{
            $('.err-tip').html('您输入的手机号格式不正确,请重新输入')
            $('.err-tip').show();
            $(this).css({
                border:'2px solid red'
            })
        }
    })
    $('.captcha_img_list span').click(function(){
        $(this).css({
            backgroundPositionY:-80
        })
    })
    $('.phone_message_load').focus(function(){
        $(this).css({
            border:'2px solid red'
        })
        $('.err-tip2').show();
    })
    $('.phone_message_load').blur(function(){
        $('.err-tip2').hide();
        $(this).css({
            border:'1px solid #dbdbdb'
        })
    })
    $('.phone_message_load').bind('input propertychange',function(){
        let regmes=/^\d{4}$/
            if(regmes.test($('.phone_message_load').val())==true){
                $('.err-tip2').hide();
                $(this).css({
                    border:'1px solid #dbdbdb'
                })
                mestemp=true;
            }
            else{
                $('.err-tip2').html('验证码格式不正确，验证码为4位数字')
                $('.err-tip2').show();
                $(this).css({
                    border:'2px solid red'
                })
            }
        })
    $('.password_load').bind('input propertychange',function(){
        let regruo=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,6}$/;
        let regzhong=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,13}$/;
        let regqiang=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{13,20}$/;
        if(regruo.test($(this).val())==true){
            $('.err-tip3').hide();
            $(this).css({
                border:'1px solid #dbdbdb'
            })
            pwdtemp=true;
            $('.password_load_span span').css({
                backgroundColor:'lightgrey'
            })
            $('.password_load_span span').eq(0).css({
                backgroundColor:'red'
            })
        }
        else if(regzhong.test($(this).val())==true){
            $('.password_load_span span').css({
                backgroundColor:'lightgrey'
            })
            $('.password_load_span span').eq(0).css({
                backgroundColor:'yellow'
            })
            $('.password_load_span span').eq(1).css({
                backgroundColor:'yellow'
            })
            $('.err-tip3').hide();
            $(this).css({
                border:'1px solid #dbdbdb'
            })
            pwdtemp=true;
        }
        else if(regqiang.test($(this).val())==true){
            $('.password_load_span span').css({
                backgroundColor:'lightgrey'
            })
            $('.password_load_span span').css({
                backgroundColor:'green'
            })
            $('.err-tip3').hide();
            $(this).css({
                border:'1px solid #dbdbdb'
            })
            pwdtemp=true;
        }
        else{
            $('.err-tip3').html('密码格式不正确，必须由数字和字母组成，6-20位')
            $('.err-tip3').show();
            $(this).css({
                border:'2px solid red'
            })
        }
    })
    $('.set_success').click(function(){
        if(phonetemp&&mestemp&&pwdtemp){
            $.ajax({
                url:'php/set.php',
                type:'post',
                data:{'userId':$('.phone_number').val(),'userPwd':$('.password_load').val()},
                success:function(data){
                   if(data=='success'){
                    window.location.href="log.html";    
                    window.event.returnValue=false;
                   }
                   else{
                       alert('该账户已被注册，请重新注册');
                   }
                }
            })
        }
        else{
            alert('表单填写错误，请重新填写');
        }
})



})