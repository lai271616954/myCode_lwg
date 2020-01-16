$(function(){
    //刷新页面回到顶部
    $(window).scrollTop(0);
     //登陆注册页面跳转
     $('.mysinglog').click(function(){
        window.open('log.html','_self');
    })
    $('.mysingset').click(function(){
        window.open('set.html','_self');
    })
     //组织a跳转的默认事件
     $("a").click(function(evt){
        let e=evt||event;
        e.preventDefault( )?e.preventDefault( ):e.returnValue = false;
    })
    $('.log_head_lilist').eq(1).hover(function(){
        $(this).css({
            backgroundColor:'#eaeceb'
        })
        $(this).find('div').stop().fadeIn(400);
        $('.log_head_lilist_fight img').attr("src","img/topjt.png")
    },function(){
        $(this).css({
            backgroundColor:'white'
        })
        $(this).find('div').stop().fadeOut(400);
        $('.log_head_lilist_fight img').attr("src","img/bottom.png")
    })
    $('.log_head_lilist').eq(3).hover(function(){
        $(this).css({
            backgroundColor:'#eaeceb'
        })
        $(this).find('div').stop().fadeIn(400);
        $('.log_head_lilist_fight1 img').attr("src","img/topjt.png")
    },function(){
        $(this).css({
            backgroundColor:'white'
        })
        $(this).find('div').stop().fadeOut(400);
        $('.log_head_lilist_fight1 img').attr("src","img/bottom.png")
    })
})