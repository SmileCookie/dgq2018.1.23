//AMD
/*
	循环广告窗口实现方法：

	1、将第一张图片添加在最后一张图片的后面

*/



define(["jquery"], function($){
	var slide = function(){
		var aBtns = $("#play").find("ol").find("li");
		var oUl = $("#play").find("ul");
		var aLi = oUl.find("li");
		var oPre = $("#play").find(".prev");
		var oNext = $("#play").find(".next");

		//a:设置iNow，代表当前显示的图片的下标
		var iNow = 0;
		var timer = null;

		aBtns.click(function(){
			//b:点击按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();


		})

		//点击箭头左右切换
		oPre.click(function(){
			iNow++;
			document.title = iNow;
			tab();
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}

		})
		oNext.click(function(){
			if(iNow == 0){
				iNow = 5;
			}
			iNow--;
			document.title = iNow;
			aBtns.attr("class", "");
			aBtns.eq(iNow).attr("class", "active");


			//让ul去动
			oUl.animate({
				left:1280 * iNow
			}, 500, function(){
				if(iNow == 0){
					oUl.css("right", 0);
					iNow = 4; //重置
				}
			})
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}



		})

		function tab(){
			aBtns.attr("class", "");
			aBtns.eq(iNow).attr("class", "active");

			//让ul去动
			oUl.animate({
				left: -1280 * iNow
			}, 500, function(){
				if(iNow == aBtns.size()){
					oUl.css("left", 0);
					iNow = 0; //重置
				}
			})

		}

		//c:我们需要启动定时器，设置让循环广告窗口自己滚动
		function timerInner(){
			iNow++;
			document.title = iNow;
			tab();
			//处理第5张图片 是第一张图片 显示下标为0的按钮选中
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}

		}

		//d: 启动定时器
		timer = setInterval(timerInner, 2000);

		//e:添加移入移出事件
		oUl.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 2000);
		})

		oPre.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 2000);
		})
		oNext.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 2000);
		})


		/*
			新产品pro_play 滚动
		*/
		function proMove(){
			$("#pro_play").stop().animate({left:-1202},500,).delay(2000).animate({left:0},500).delay(2000);
		}
		var pro_timer = null;
		//<1>启动定时器
		pro_timer = setInterval(proMove, 5000);
		//<2>添加移入移出事件
		$(".more").has("div").hover(function(){
			clearInterval(pro_timer);
			$("#pro_play").stop(true, true);
		},function(){
			pro_timer = setInterval(proMove, 5000);
		})
		//添加点击事件，事件委托
		$(".more").delegate('#fl', 'click', function(){
			var  left = $("#pro_play").offset().left;
			if(left > 0){
				$("#pro_play").animate({left:-1202},500,);
			}

		});
		$(".more").delegate('#fr', 'click', function(){
			var  left = $("#pro_play").offset().left;
			if(left < 0){
				$("#pro_play").animate({left:0},500,);
			}

		});
		/*
			新闻轮播 news
		*/
		//<1>让ul去动
		//iNews是当前图片的下标
		var iNews = 0;
		var newstimer = null;
		function newsMove(){
			iNews++;

			$("#news_play").animate({
				left:-460 * iNews,
			},500,function(){
				if(iNews  == 4){
					$("#news_play").css("left", 0);
					iNews = 0;

				}
			})

		}
		//启动定时器
		newstimer = setInterval(newsMove, 2000);
		//添加移入移出事件
		$("#news_right").hover(function(){
			clearInterval(newstimer);
		},function(){
			newstimer = setInterval(newsMove, 2000);
		})
		//添加点击事件
		$("#news_l").click(function(){
			iNews++;

			$("#news_play").animate({
				left:460 * iNews,
				},500,function(){
					if(iNews  == 0){
						$("#news_play").css("left", 0);
						iNews = 4;

					}
			})
		})
		$("#news_r").click(function(){
			newsMove();
		})






		return "这里是循环广告窗口代码";
	}

	return {
		slide: slide
	}
})












