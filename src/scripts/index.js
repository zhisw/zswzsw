var $=require("./common/libs/zepto-modules/zepto.js");
require("./common/libs/zepto-modules/_custom.js");
require("./common/libs/zepto-modules/touch.js");
var IScroll=require("./common/libs/iscroll.js");
var swiperani=require("./common/libs/swiper.animate1.0.2.min.js") ;
var Swiper=require('./common/libs/swiper.min.js');



window.onload=function(){
	if(localStorage.getItem("hello")){
	$('.container2').show();
	$('.swiper-container').hide();
	 myVideo.pause();
	$.post('http://localhost:8000/skill',function(data){
			var html=''
				for(var i=0;i<data.info.length;i++){

html+='<li><div class="category_box"><span class="title">技术类别:</span><span class="category">'+data.info[i].category+'</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="name">'+data.info[i].name+'</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">'+data.info[i].level+'</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">'+data.info[i].time+'</span></div></li>'
				}
				$("#scroller").find('ul').html(html);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);

		});
}else{
	$('.container2').hide();
	$('.swiper-container').show();
}
}
 var swiper = new Swiper('.swiper-container',{
          onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperani.swiperAnimateCache(swiper); //隐藏动画元素 
            swiperani.swiperAnimate(swiper); //初始化完成开始动画
            $('#twopage').children().hide();
          }, 
          onSlideChangeEnd: function(swiper){ 
            swiperani.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            /*$('#twopage').children().show();*/
         /*   setTimeout(function(){
            		$('#taiyang').removeClass('fadeInDownBig');
            },10000)*/
            
            $('.myskill').show();
          
            $('.skill_1').show(1.8);
            //$('.skill_2').addClass('animated slideInRight');
            $('.skill_2').show(2);
            //$('.skill_3').addClass('animated slideInLeft');
            $('.skill_3').show(2.2);
            //$('.skill_4').addClass('animated slideInRight');
            $('.skill_4').show(2.4);
            //$('.skill_5').addClass('animated slideInLeft');
            $('.skill_5').show(2.6);
           //$('.skill_6').addClass('animated zoomInUp');
            $('.skill_6').show(3);
            
          } 
    });
 		$('.footer_btn').removeClass('active');
			$('#skill').addClass('active');
	var myVideo = document.getElementsByTagName('video')[0];
	var myScroll;
	$('.btn').on('tap',function(){
			$('.container2').show();
			$('.swiper-container').hide();
        localStorage.setItem("hello", "zsw");
        myVideo.pause();
		$.post('http://localhost:8000/skill',function(data){
			var html=''
				for(var i=0;i<data.info.length;i++){

html+='<li><div class="category_box"><span class="title">技术类别:</span><span class="category">'+data.info[i].category+'</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="name">'+data.info[i].name+'</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">'+data.info[i].level+'</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">'+data.info[i].time+'</span></div></li>'
				}
				$("#scroller").find('ul').html(html);
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);

		});
		
	});

	$('#work').tap(function(){
		$('#header').html($(this).html())
		$('.footer_btn').removeClass('active');
		$(this).addClass('active');
		$.post('http://localhost:8000/work',function(data){
			var html=''
			for(var a=0;a<data.work.length;a++){
	html+='<li><div class="category_box"><span class="title">企业性质:</span> <span class="category">'+data.work[a].category+'</span></div><div class="name_box"><span class="title">企业名称:</span> <span class="name">'+data.work[a].name+'</span></div><div class="level_box"><span class="title">企业网站:</span><span class="url">'+data.work[a].url+'</span></div><div class="time_box"><span class="title">时 &nbsp;  &nbsp;&nbsp;间:</span> <span class="time">'+data.work[a].time+'</span></div><div class="posts_box"><span class="title">职 &nbsp;  &nbsp;&nbsp;位:</span><span class="posts">'+data.work[a].posts+'</span></div><div class="peoples_box"><span class="title">人 &nbsp;  &nbsp;&nbsp;数:</span><span class="peoples">'+data.work[a].peoples+'</span></div><div class="projects_box"><span class="title">参与项目:</span><span class="projects">'+data.work[a].projects+'</span></div></li>'
			}
		$("#scroller").find('ul').html(html);
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);
		myScroll.scrollTo(0,0);
		myScroll.refresh();	
		})
	})

	$('#skill').tap(function(){
		$('#header').html($(this).html())
		$('.footer_btn').removeClass('active');
		$(this).addClass('active');
		$.post('http://localhost:8000/skill',function(data){
			var html=''
				for(var i=0;i<data.info.length;i++){
html+='<li><div class="category_box"><span class="title">技术类别:</span><span class="category">'+data.info[i].category+'</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="name">'+data.info[i].name+'</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">'+data.info[i].level+'</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">'+data.info[i].time+'</span></div></li>'
				}
				$("#scroller").find('ul').html(html);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);
			myScroll.scrollTo(0,0);
			myScroll.refresh();	
		})

	})
	$('#project').tap(function(){
		$('#header').html($(this).html())
		$('.footer_btn').removeClass('active');
		$(this).addClass('active');
		$.post('http://localhost:8000/project',function(data){
			var html=''
			for(var b=0;b<data.pro.length;b++){
	html+='<li><div class="category_box"><span class="title">项目类别:</span> <span class="category">'+data.pro[b].category+'</span></div><div class="name_box"><span class="title">企业名称:</span> <span class="proname">'+data.pro[b].name+'</span></div><div class="level_box"><span class="title">企业网站:</span><span class="url">'+data.pro[b].url+'</span></div><div class="time_box"><span class="title">项目内容:</span> <span class="description">'+data.pro[b].description+'</span></div><div class="posts_box"><span class="title">项目简介:</span><span class="detail">'+data.pro[b].detail+'</span></div><div class="peoples_box"><span class="title">技术点:</span><span class="tech">'+data.pro[b].tech+'</span></div></li>'
			}
		$("#scroller").find('ul').html(html);
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);
		myScroll.scrollTo(0,0);
		myScroll.refresh();	
		})
	})

		var num=0;
		var timer=null;
		timer=setInterval(function(){
					num++;
					$('.music').css({'transform':'rotate('+num+'deg);'});
					if(num==360){
						num=0;
					}
				},10);
		var nstop=true;
		$('.music').tap(function(){
			if(nstop){
				clearInterval(timer);
				nstop=false;
			}else{
				timer=setInterval(function(){
					num++;
					$('.music').css({'transform':'rotate('+num+'deg);'});
					if(num==360){
						num=0;
					}
				},10);
				nstop=true;
			};
			 if (myVideo.paused){
           			myVideo.play();
				}
		       else{
		           myVideo.pause();
					};
				})

		var num1=0;
	setInterval(function(){
					num1++;
					$('.xkpic').css({'transform':'rotate('+num1+'deg);'});
					$('.xkpic1').css({'transform':'rotate('+num1+'deg);'});
					$('.xkpic2').css({'transform':'rotate('+num1+'deg);'});
					if(num1==360){
						num1=0;
					}
				},120);



/*	var pullDown = document.getElementById("PullDown"),
    pullUp = document.getElementById("PullUp"),
    isPulled = false; // 拉动标记*/

/*var myScroll = new IScroll('#wrapper', {
    probeType: 3,
    mouseWheel: true,
    scrollbars: true,
    preventDefault: false,
    fadeScrollbars: true
});
console.log(myScroll)
myScroll.on(scroll,function() {
	 alert(1)
    var height = this.y,
        bottomHeight = this.maxScrollY - height;

    // 控制下拉显示
    if (height >= 30) {
        pullDown.style.display = "block";
        isPulled = true;

        return;
    }
    else if (height < 30 && height >= 0) {
        pullDown.style.display = "none";
        return;
    }

    // 控制上拉显示
    if (bottomHeight >= 30) {
        pullUp.style.display = "block";
        isPulled = true;
        return;
    }
    else if (bottomHeight < 30 && bottomHeight >= 0) {
        pullUp.style.display = "none";
        return;
    }
})

myScroll.on('scrollEnd', function() { // 滚动结束
    if (isPulled) { // 如果达到触发条件，则执行加载
        isPulled = false;
        appendContent(getContents());
        myScroll.refresh();
    }
});*/


