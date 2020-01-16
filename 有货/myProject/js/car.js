window.onload=function(){
    //组织a跳转的默认事件
    $("a").click(function(evt){
        let e=evt||event;
        e.preventDefault( )?e.preventDefault( ):e.returnValue = false;
    })
    $('.goto_index').click(function(){
        $(location).attr('herf','index.html');
    })
    class Car{
        constructor(){
    
        }
        //渲染页面
        render() {
            let data = JSON.parse(localStorage.getItem('data'));
            let box = document.getElementsByClassName('car_pro_whichlist')[0];
            let nolist=document.querySelector('.car_empty_img');
            let toshow=document.querySelector('.car_body_list')
            if(localStorage.length==0){
                nolist.style.display='block';
            }
            else{
                nolist.style.display='none';
                toshow.style.display='block';
                for (let i=0;i<data.length;i++) {
                box.innerHTML += `
                <div class="car_promo_pool">
                <div class="car_pool_son">
                    <div class="car_pool_tit">
                        <input type="checkbox" class="car_pool_choose">
                        <a href="#"><img src="${data[i].imgSrc}" alt=""></a>
                        <div>
                        <p>${data[i].title}</p>
                            <p>颜色：白色
                                尺码：M</p>
                        </div>
                    </div>
                    <div class="car_pool_price">￥<span class="car_pool_pricespan">${data[i].price}</span></div>
                    <div class="car_pool_num">
                       <div class="car_pool_num_con">
                           <span class="car_pool_reduce">-</span>
                           <input class="car_pool_getnum" type="text" value="${data[i].num}">
                           <span class="car_pool_add">+</span>
                       </div>
                    </div>
                    <div class="car_pool_totalprice">
                    <span>￥</span>
                    <span class="car_pool_totalpricespan">${data[i].num*data[i].price}</span>
                    </div>
                    <div class="car_pool_do">
                        <p class='car_pool_delete'>删除</p>
                        <p>移入收藏</p>
                    </div>
                    <div style="display: none;">${data[i].goodId}</div>
                </div>
            </div>
                `
            }
            this.getTotalNum();
            this.getTotalPrice();
            this.eventBind();
            }
        }
        //改变总数量
        getTotalNum() {
            let num = document.getElementsByClassName('car_pool_getnum');
            let totalNum = document.getElementById('my_totalNum');
            let sum = 0;
            for (let i = 0; i < num.length; i++) {
                sum += Number(num[i].value);
            }
            totalNum.innerHTML = sum;
        }
        // 改变总价格
        getTotalPrice() {
            let xiaoji = document.getElementsByClassName('car_pool_totalpricespan');
            let totalPrice = document.getElementById('my_totalPrice');
            let sum = 0;
            for (let i = 0; i < xiaoji.length; i++) {
                sum += Number(xiaoji[i].innerHTML);
            }
            totalPrice.innerHTML = '￥'+sum;
        }
        //获取小记
        getXiaoji(btn, num) {
            let price = btn.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML;
            let xiaoji = btn.parentNode.parentNode.nextElementSibling.lastElementChild;
            xiaoji.innerHTML = Number(price)*Number(num);
        }
        //增加数量
        addSome(btn){
            let num=btn.previousElementSibling;
            num.value = Number(num.value) + 1;
            this.getXiaoji(btn, num.value);
            this.getTotalNum();
            this.getTotalPrice();
            let goodId = btn.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
            this.changeNum(goodId, '+');
        }
        //改变存储的localstorage
        changeNum(goodId, flag) {
            let data = JSON.parse(localStorage.getItem('data'));
            for (let i = 0; i < data.length; i++) {
                if (goodId == data[i].goodId) {
                    if (flag == '+') { //增加数量的操作
                        data[i].num += 1;
                    } else if (flag == '-') { // 减少数量的操作
                        data[i].num -= 1;
                    }
                }
            }
            localStorage.setItem('data', JSON.stringify(data));
        }
        // 减少数量
        reduceSome(btn) {
            let num = btn.nextElementSibling;
            if (num.value <= 1) {
                alert('没得减啦')
            } else {
                num.value = Number(num.value) - 1;
                this.getXiaoji(btn,num.value);
                this.getTotalNum();
                this.getTotalPrice();
                let goodId = btn.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
                this.changeNum(goodId, '-');
            }
        }
        // 删除货物
        deleteSome(btn) {
            let tr = btn.parentNode.parentNode.parentNode;
            let goodId = btn.parentNode.nextElementSibling.innerText;
            tr.remove();
            this.getTotalNum();
            this.getTotalPrice();
            let data = JSON.parse(localStorage.getItem('data'));
            for (let i = 0; i < data.length; i++) {
                if (goodId == data[i].goodId) {
                    data.splice(i, 1); 
                }
            }
            localStorage.setItem('data', JSON.stringify(data));
            if(data.length==0){
                localStorage.removeItem('data');
                let nolist=document.querySelector('.car_empty_img');
                let toshow=document.querySelector('.car_body_list')
                nolist.style.display='block';
                toshow.style.display='none';
            }
        }
        eventBind() {
            let that = this;
            let addBtn = document.getElementsByClassName('car_pool_add');
            for (let i = 0; i < addBtn.length; i++) {
                addBtn[i].onclick = function () {
                    that.addSome(this);
                }
            }
            let reduceBtn = document.getElementsByClassName('car_pool_reduce');
            for (let i = 0; i < reduceBtn.length; i++) {
                reduceBtn[i].onclick = function () {
                    that.reduceSome(this); // 删除 } }
                }
            }
            let deleteBtn = document.getElementsByClassName('car_pool_delete');
            for (let i = 0; i < deleteBtn.length; i++) {
                deleteBtn[i].onclick = function () {
                    that.deleteSome(this);
                }
            }
        }
    }
    let p = new Car();
    p.eventBind();
    p.getTotalNum();
    p.getTotalPrice();
    p.render();
}