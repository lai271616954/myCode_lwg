$(function(){
    //侧边栏
    $('.index_fixbox button').click(function(){
        $('.index_fixbox').hide();
    })
    $('.index_fixbtn').children().eq(0).mouseover(function(){
        $('.index_fixbtn_wechathover').show();
    })
    $('.index_fixbtn').children().eq(0).mouseout(function(){
        $('.index_fixbtn_wechathover').hide();
    })
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.index_fixbtn').show();
        }
        if($(this).scrollTop()<=0){
            $('.index_fixbtn').hide();
        }
    })
    $('.index_fixbtn a').eq(1).click(function(){
        $("html,body").stop().animate({
            scrollTop: 0,
            screenLeft: 0
        },500); 
    })
})