$(function(){
    //刷新页面回到顶部
    $(window).scrollTop(0);
     //登陆注册页面跳转
    $('.mylog').click(function(){
        $(location).attr('href', 'log.html');
    })
    $('.myset').click(function(){
        $(location).attr('href', 'set.html');
    })
     //组织a跳转的默认事件
     $("a").click(function(evt){
        let e=evt||event;
        e.preventDefault( )?e.preventDefault( ):e.returnValue = false;
    })
    //购物车跳转
    $('.goto_shopcar').click(function(){
        $(location).attr('href','car.html');
    })
    //头部jQuery
    $('.head_top_block_left').mouseover(function(){
        $('.head_top_block_left').css({
            backgroundColor:'lightgrey'
        })
        $('.yohoGroup').css({
            display:'block'
        })
    })
    $('.head_top_block_left').mouseout(function(){
        $('.head_top_block_left').css({
            backgroundColor:'#f4f4f4'
        })
        $('.yohoGroup').css({
            display:'none'
        })
    })
    let liArr=['集团官网','男生潮流','女生潮流','新鲜好去处','潮流嘉年华'];
    let lioutArr=['YOHO!','YOHO!BOYS','YOHO!GIRLS','Mars','YO`HOOD'];
    $('.yohoGroup li a').mouseover(function(){
        $(this).html(liArr[$(this).parent().index()]);
        $(this).css({
            color:'#000'
        })
    })
    $('.yohoGroup li a').mouseout(function(){
        $(this).html(lioutArr[$(this).parent().index()]);
        $(this).css({
            color:'#8e8e8e'
        })
    })
    $('.top_myYoho').mouseover(function(){
        $(this).css({
            backgroundColor:'lightgrey'
        })
    })
    $('.top_myYoho').mouseout(function(){
        $(this).css({
            backgroundColor:'#f4f4f4'
        })
    })
    $('.top_help').mouseover(function(){
        $(this).css({
            backgroundColor:'lightgrey'
        })
        $('.top_help_son').stop().fadeIn(500);
    })
    $('.top_help').mouseout(function(){
        $(this).css({
            backgroundColor:'#f4f4f4'
        })
        $('.top_help_son').stop().fadeOut(500);
    })
    $('.top_weChat').mouseover(function(){
        $(this).css({
            backgroundColor:'lightgrey'
        })
        $('.top_weChat_son').css({
            display:'block'
        })
    })
    $('.top_weChat').mouseout(function(){
        $(this).css({
            backgroundColor:'#f4f4f4'
        })
        $('.top_weChat_son').css({
            display:'none'
        })
    })
    $('.top_phone').mouseover(function(){
        $(this).css({
            backgroundColor:'lightgrey'
        })
        $('.top_phone_son').css({
            display:'block'
        })
    })
    $('.top_phone').mouseout(function(){
        $(this).css({
            backgroundColor:'#f4f4f4'
        })
        $('.top_phone_son').css({
            display:'none'
        })
    })
    $('.head_middle_ullist li').click(function(){
        $('.head_middle_ullist li').removeClass('middle_click');
        $('.head_middle_ullist li h5 a').removeClass('middle_color');
        $(this).addClass('middle_click');
        $(this).find('a').addClass('middle_color');
    })
    $('.head_ser_ullist li a').mouseover(function(){
        $(this).css({
            color:'#d71d32'
        })
    })
    $('.head_ser_ullist li a').mouseout(function(){
        $(this).css({
            color:'#b0b0b0'
        })
    })
    $('.head_bottom_ullist li a').mouseover(function(){
        $(this).css({
            borderBottom:'2px solid white'
        })
    })
    $('.head_bottom_ullist li a').mouseout(function(){
        $(this).css({
            borderBottom:'none'
        })
    })
    $('.head_middle_search span').mouseover(function(){
        $('.head_carlist').css({
            display:'block'
        })
    })
    $('.head_middle_search span').mouseout(function(){
        $('.head_carlist').css({
            display:'none'
        })
    })
    //导航栏的隐藏菜单
    var isShow1=false;
    $(".bot_list_show1").mouseover(function(){
        $(".head_bot_list1").show();
    });
    $(".bot_list_show1").mouseout(function(){
        $(".head_bot_list1").hide();
    });
    $(".head_bot_list1").mouseover(function(){
        isShow1=true;   
        $(this).show(); 
    });
    $(".head_bot_list1").mouseout(function(){
        if(isShow1)
        {
            $(".head_bot_list1").hide();
            $(".head_bot_list2").hide();
            $(".head_bot_list3").hide();
            $(".head_bot_list4").hide();
            isShow1=false;
        }   
    });
    var isShow2=false;
    $(".bot_list_show2").mouseover(function(){
        $(".head_bot_list2").show();
    });
    $(".bot_list_show2").mouseout(function(){
        $(".head_bot_list2").hide();
    });
    $(".head_bot_list2").mouseover(function(){
        isShow2=true;   
        $(this).show(); 
    });
    $(".head_bot_list2").mouseout(function(){
        if(isShow2)
        {
            $(".head_bot_list1").hide();
            $(".head_bot_list2").hide();
            $(".head_bot_list3").hide();
            $(".head_bot_list4").hide(); 
            isShow2=false;
        }   
    });
    var isShow3=false;
    $(".bot_list_show3").mouseover(function(){
        $(".head_bot_list3").show();
    });
    $(".bot_list_show3").mouseout(function(){
        $(".head_bot_list3").hide();
    });
    $(".head_bot_list3").mouseover(function(){
        isShow3=true;   
        $(this).show(); 
    });
    $(".head_bot_list3").mouseout(function(){
        if(isShow3)
        {
            $(".head_bot_list1").hide();
            $(".head_bot_list2").hide();
            $(".head_bot_list3").hide();
            $(".head_bot_list4").hide();
            isShow3=false;
        }   
    });
    var isShow4=false;
    $(".bot_list_show4").mouseover(function(){
        $(".head_bot_list4").show();
    });
    $(".bot_list_show4").mouseout(function(){
        $(".head_bot_list4").hide();
    });
    $(".head_bot_list4").mouseover(function(){
        isShow4=true;   
        $(this).show(); 
    });
    $(".head_bot_list4").mouseout(function(){
        if(isShow4)
        {
            $(".head_bot_list1").hide();
            $(".head_bot_list2").hide();
            $(".head_bot_list3").hide();
            $(".head_bot_list4").hide(); 
            isShow4=false;
        }   
    });
})