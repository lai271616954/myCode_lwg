// 自带的js代码
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
      }
});

// 自带js结束

// 音乐控制
let musicclick=1;
let music=document.getElementById('music');
let automusic=document.getElementsByClassName('audiomusic')[0];
music.onclick=function(){
    if(musicclick==1){
        music.style.animation='none';
        musicclick=0;
        automusic.pause();
    }
    else if(musicclick==0){
        music.style.animation='music 3s linear infinite';
        musicclick=1;
        automusic.play();
    }
}