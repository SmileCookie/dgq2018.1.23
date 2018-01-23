//编写主页的代码
define(["jquery"], function($){
    var main = function(){
        $(function(){
            //菜单
            $.ajax({
                url:"../data/menu.json",
                type:"GET",
                success:function(res){
                    var html = "";
                    var arr = null;
                    var htmll = "";

                    for(var i = 0;i < res.length; i++){
                        html +=`<li>
                                    <a href=""><img src="${res[i].img}" alt="">${res[i].name}</a>
                                    <ul>
                                    </ul>
                                </li>`;
                        arr = res[i].images;

                        for(var j = 0; j < arr.length; j++){
                            htmll +=`<li>
                                        <a href=""><img src="${arr[j].bg}" alt=""></a>
                                    </li>`;
                            $(".menu ul li ul").html(htmll);
                        }


                    }
                    $(".menu ul").html(html);

                }
            })

            /*
                优惠券
            */
            $.ajax({
                url:"../data/coupon.json",
                type:"GET",
                success:function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li><a href=""><img src="${res[i].img}" alt=""></a></li>`;
                    }
                    $(".coupon ul").html(html);
                }
            })

            /*
                newproduct 新产品
            */
            $.ajax({
                url: "../data/newproduct.json",
                type:"GET",
                success:function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += `<li>
                                    <a href=""><img src="${res[i].img}" alt=""></a>
                                    <p>${res[i].title}</p>
                                    <p>${res[i].intro}</p>
                                    <p>￥${res[i].price}</p>
                                </li>`;
                    }
                    $("#pro_play").html(html);
                }
            })

            /*
                star_product明星产品
            */
            $.ajax({
                url:"../data/star_product.json",
                type:"GET",
                success:function(res){
                    var html1 = '';
                    var html2 ="";
                    for(var i = 0; i < res.length; i++){
                        if(i < 3){
                            html1 += `<div><a href=""><img src="${res[i].img}" alt=""></a></div>`;
                        }else{
                            html2 += `<div><a href=""><img src="${res[i].img}" alt=""></a></div>`;
                        }

                    }
                    $(".star_product ul").find("li").eq(0).html(html1);
                    $(".star_product ul").find("li").eq(1).html(html2);
                }
            })

            /*
                hotSales 人气热销
            */
            function hotSales(){
                var aLis = $(".hot_sales").find("ul").find('li');
                var iLen = aLis.length;
                $.ajax({
                    url:"../data/hotSales.json",
                    type:"GET",
                    success:function(res){
                        var html = "";
                        for(var j = 0; j < res.length; j++){
                            html +=`<li><div><a href=""><img src="${res[j].img}" alt=""></a></div></li>`;
                            $(".hot_sales ul").html(html);
                        }
                    }
                })
                //找出最短li下标的函数
                function getShort(){
                    var index = 0;
                    var iH = aLis[index].offsetHeight;
                    for(var i = 1; i < iLen; i++){
                        if(aLis[i].offsetHeight < iH){
                            index = i;
                            iH = aLis[i].offsetHeight;
                        }
                    }
                    return index;
                }
            }
            hotSales();

            /*
                activity活动
            */
            $.ajax({
                url:"../data/activity.json",
                type:"GET",
                success:function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li><div><a href=""><img src="${res[i].img}" alt=""></a></div></li>`;
                        $(".activity ul").html(html);
                    }
                }
            })

            /*
                news_center 新闻中心
            */
            $.ajax({
                url:"../data/newsText.json",
                type:"GET",
                success:function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        if(i == 0){
                            html += `<li>
                                        <a href="">${res[i].title}</a><span>${res[i].date}</span>
                                        <a href="" class= "details">了解详情</a>
                                    </li>`;
                        }else{
                            html +=` <li><a href="">${res[i].title}</a><span>${res[i].date}</span></li>`;
                        }

                    }
                    $("#news ul").html(html);

                }
            })
            /*
                news_play 新闻轮播图片
            */
            $.ajax({
                url:"../data/news_play.json",
                type:"GET",
                success:function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += `<li>
                                    <a href="">
                                        <span>${res[i].title}</span>
                                        <img src="${res[i].img}" alt="">
                                    </a>

                                </li>`;
                    }
                    $("#news_play").html(html);

                }
            })

            /*给右边菜单添加点击事件，返回顶部*/
            $("#toTop").click(function(){
                $(window).scrollTop(0);
            })

            /*给用户添加移入移出事件*/
            $("#user_login").hover(function(){
                $("#user_login").find("ul").css("display", "block");
            },function(){
                $("#user_login").find("ul").css("display", "none");
            })



        })


        return "我是main函数";
    }
    return {
        main: main
    }
})