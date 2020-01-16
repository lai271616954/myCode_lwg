$(function(){
    var log_phonetemp=false;
    var log_pwdtemp=false;
    $('.log_switch div').click(function(){
        $('.log_switch div').removeClass('log_switch_selected');
        $(this).addClass('log_switch_selected');
    })
    $('.log_phoneNumber').blur(function(){
        let regnum=/^1(3|4|5|7|8)\d{9}$/
            if(regnum.test($('.log_phoneNumber').val())==true){
                $(this).css({
                    border:'1px solid #dbdbdb'
                })
                $('.err-tip').hide();
                log_phonetemp=true;
            }
            else{
                $('.err-tip').html('手机号格式不正确');
                $('.err-tip').show();
                $(this).css({
                    border:'2px solid red'
                })
            }
        })
        $('.log_password').blur(function(){
            let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
            if(reg.test($(this).val())==true){
                $(this).css({
                    border:'1px solid #dbdbdb'
                })
                $('.err-tip2').hide();
                log_pwdtemp=true;
            }
            else{
                $('.err-tip2').html('密码格式不正确，必须由数字和字母组成，6-20位')
                $('.err-tip2').show();
                $(this).css({
                    border:'2px solid red'
                })
            }
        })
        $('.log_free').click(function(){
            if($(this).attr('data-ck')=='false'){
                $(this).attr('data-ck','true');
                $(this).attr('checked',true);
            }
            else{
                $(this).attr('data-ck','false');
                $(this).attr('checked',false);
            }
        })
        $('.log_content_lili div').click(function(){
                if(log_phonetemp&&log_pwdtemp){
                    $.ajax({
                        url:'php/log.php',
                        type:'post',
                        data:{'userId':$('.log_phoneNumber').val(),'userPwd':$('.log_password').val()},
                        success:function(data){
                            if(data=='success'){ 
                                if($('.log_free').attr('checked')=='checked'){
                                    let date = new Date();
                                    date.setDate(date.getDate()+7);
                                    document.cookie='uid='+$(".log_phoneNumber").val()+";expires="+date;
                                    document.cookie='upwd='+$(".log_password").val()+";expires="+date;
                                }
                                else{
                                    document.cookie='uid='+$(".log_phoneNumber").val();
                                    document.cookie='upwd='+$(".log_password").val();
                                }
                                window.location.href="index.html";    
                                window.event.returnValue=false;
                            } 
                        }
                 })
             }
        })
        
})