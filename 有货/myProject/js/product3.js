$(function(){
    var goodsBox = [];
        $('.pro_add_car').click(function(){
            let flag = false;
            let title = this.parentNode.firstElementChild.innerText;
            let price = this.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML;
            let imgSrc =this.parentNode.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.firstElementChild.src;
            let goodId = this.nextElementSibling.nextElementSibling.innerHTML;
            let obj = {
                "imgSrc": imgSrc,
                "title": title,
                "price": price,
                "num": 1,
                "goodId": goodId
            }
            if (localStorage.getItem("data") != null){
                let dataList = JSON.parse(localStorage.getItem('data'));
                for (let x = 0; x < dataList.length; x++) {
					if (goodId == dataList[x].goodId) {
						dataList[x].num = dataList[x].num + 1;
                        flag = true; 
                        alert('加入购物车成功');
					}
				}
				if (flag == false) {
					dataList.push(obj);
					alert('加入购物车成功');
				}
				
				localStorage.setItem('data', JSON.stringify(dataList));
				
			}else{ 
				goodsBox.push(obj);
			    localStorage.setItem('data', JSON.stringify(goodsBox));
			    alert('加入购物车成功');
			}
        })
$('.pro_clo_allimgsmall img').eq(0).mouseover(function(){
    $(this).css({
        border:'2px solid black'
    })
    $(this).next().css({
        border:'2px solid white'
    })
    $('.pro_clo_imgbig_top').css({
        backgroundImage:'url(img/product/big3-1.jpg)'
    })
    $('.pro_clo_max').css({
        backgroundImage:'url(img/product/biggest3-1.jpg)'
    })
})
$('.pro_clo_allimgsmall img').eq(1).mouseover(function(){
   $(this).css({
    border:'2px solid black'
   })
   $(this).prev().css({
    border:'2px solid white'
    })
    $('.pro_clo_imgbig_top').css({
        backgroundImage:'url(img/product/big3-2.jpg)'
    })
    $('.pro_clo_max').css({
        backgroundImage:'url(img/product/biggest3-2.jpg)'
    })
})
$('.pro_clo_imgbig_top').mouseover(function(){
   $('.mask').css({
       display:'block'
   })
   $('.pro_clo_max').css({
    display:'block'
})
})
$('.pro_clo_imgbig_top').mouseout(function(){
$('.mask').css({
    display:'none'
    })
$('.pro_clo_max').css({
    display:'none'
    })
})
$('.pro_clo_imgbig_top').mousemove(function(evt){
    let e = evt || event;
    
    let left = e.pageX - $(this).offset().left - $('.mask').width()/2;
    let top = e.pageY - $(this).offset().top - $('.mask').height()/2;
    
    let x = $('.pro_clo_max').width()*left/$('.mask').width();
    let y = $('.pro_clo_max').height()*top/$('.mask').height();
    if(left<0){
        left = 0;
    }
    
    let maxLeft = $(this).width() - $('.mask').width();
    
    if(left > maxLeft){
        left = maxLeft;
    }
    
    if(top<0){
        top = 0;
    }
    
    let maxTop = $(this).height() - $('.mask').height();
    
    if(top > maxTop){
        top = maxTop;
    }

    if(x<0){
        x = 0;
    }
    
    let maxX = 750 - $('.pro_clo_max').width();
    
    if(x > maxX){
        x = maxX;
    }
    
    if(y<0){
        y = 0;
    }
    
    let maxY = 950 - $('.pro_clo_max').height();
    
    if(y > maxY){
        y = maxY;
    }
    $('.mask').css({
        left:left,
        top:top
    })
    $('.pro_clo_max').css({
        backgroundPositionX:-x,
        backgroundPositionY:-y
    })
})
$('.pro_choose_size_num span').click(function(){
    $('.pro_choose_size_num span').css({
        backgroundColor:'white',
        color:'#000'
    })
    $(this).css({
        backgroundColor:'#000',
        color:'white'
    })
})
$('.pro_choose_size_num span').eq(0).click(function(){
    $('.pro_choose_size_news').html('170-84A／胸围 94cm');
})
$('.pro_choose_size_num span').eq(1).click(function(){
    $('.pro_choose_size_news').html('175-88A／胸围 100cm');
})
$('.pro_choose_size_num span').eq(2).click(function(){
    $('.pro_choose_size_news').html('180-92A／胸围 106cm');
})
$('.pro_choose_num_reduce').click(function(){
    let nums= $('.pro_nums').val();
    nums--;
    if(nums<=1){
        nums=1;
    }
    $('.pro_nums').val(nums)
})
$('.pro_choose_num_add').click(function(){
    let nums= $('.pro_nums').val();
    nums++;
     $('.pro_nums').val(nums)
 })
$('.aaispan').click(function(){
$('.aaispan').removeClass('aaiactive');
$(this).addClass('aaiactive');
})
})