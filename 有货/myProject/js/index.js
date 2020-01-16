$(function(){
    //刷新页面回到顶部
    $(window).scrollTop(0);
     //组织a跳转的默认事件
     $("a").click(function(evt){
        let e=evt||event;
        e.preventDefault( )?e.preventDefault( ):e.returnValue = false;
    })
    //轮播图jQuery
    $.extend({
        myBanner:function(){
        $(".pic li").eq(0).show();
        $(".position li").mouseover(function () {
            $(this).find('div').css({
                opacity:0
            })
            var index = $(this).index();
            i=index;
            $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
            $(this).siblings().find('div').css({
                display:'block'
            })
        });
        $(".position li").mouseout(function () {
                $(this).find('div').css({
                    opacity:.3
                })
        });
        //自动轮播
        var i = 0;
        var timer = setInterval(play, 2000);
        //向右切换
        var play = function () {
            i++;
            i = i > 7 ? 0 : i;
            $('.pic li').eq(i).fadeIn(500).siblings().fadeOut(500);
            $('.position li').eq(i).find('div').css({
                display:'none'
            });
            $('.position li').eq(i).siblings().find('div').css({
                display:'block'
            });
        }
        //向左切换
        var playLeft = function () {
            i--;
            i = i < 0 ? 7 : i;
            $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //鼠标移入移出效果
        $(".pic").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(play, 2000);
        });
        $(".position").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(play, 2000);
        });
        //左右点击切换
        $(".pic").mouseover(function(){
            $('.banner_btn').css({
                display:'block'
            })
        })
        $(".pic").mouseout(function(){
            $('.banner_btn').css({
                display:'none'
            })
        })
        $(".prev").mouseover(function () {
            $(this).css({
                opacity:.85
            })
        })
        $(".next").mouseover(function () {
            $(this).css({
                opacity:.85
            })
        })
        $(".prev").mouseout(function () {
            $(this).css({
                opacity:.55
            })
        })
        $(".next").mouseout(function () {
            $(this).css({
                opacity:.55
            })
        })
        $(".prev").click(function () {
            playLeft();
        })
        $(".next").click(function () {
            play();
        })
        }
    })
    $.myBanner();
    //人气单品
    $('.index_block_one_list li a img').mouseover(function(){
        $(this).css({
            opacity:0.8
        })
    })
    $('.index_block_one_list li a img').mouseout(function(){
        $(this).css({
            opacity:1
        })
    })
    //优选品牌
    $('.index_block_two_block').mouseover(function(){
        $('.index_block_two_btn').css({
            display:'block'
        });
    })
    $('.index_block_two_block').mouseout(function(){
        $('.index_block_two_btn').css({
            display:'none'
        });
    })
    $('.index_block_two_ul li a img').mouseover(function(){
        $(this).css({
            opacity: .8
        })
    })
    $('.index_block_two_ul li a img').mouseout(function(){
        $(this).css({
            opacity: 1
        })
    })
    $('.index_block_two_btn a').mouseover(function(){
        $(this).css({
            opacity: .8
        })
    })
    $('.index_block_two_btn a').mouseout(function(){
        $(this).css({
            opacity: .55
        })
    })
    $('.index_block_two_logo a img').mouseover(function(){
        $(this).css({
            opacity:0.8
        })
    })
    $('.index_block_two_logo a img').mouseout(function(){
        $(this).css({
            opacity:1
        })
    })
    //潮流上装
    $('.index_block_more_other a img').mouseover(function(){
        $(this).css({
            opacity:0.8
        })
    })
    $('.index_block_more_other a img').mouseout(function(){
        $(this).css({
            opacity:1
        })
    })
    //final block
    $('.index_block_fin_float a img').mouseover(function(){
        $(this).css({
            opacity:0.8
        })
    })
    $('.index_block_fin_float a img').mouseout(function(){
        $(this).css({
            opacity:1
        })
    })
     //跳转页面
    $('.postProid1').click(function(){
        $(location).attr('href', 'product.html');
    })
    $('.postProid2').click(function(){
        $(location).attr('href', 'product2.html');
    })
    $('.postProid3').click(function(){
        $(location).attr('href', 'product3.html');
    })
})