(function (win, $) {
	// const contWidth = document.documentElement.clientWidth;
	const contHeight = document.documentElement.clientHeight - 51 - 30;
	$('.cont').height(contHeight);
	// 水温
	var shuiwen = $("#container1")
	shuiwen.css("height",contHeight * "0.43");
	var shed = $("#shed")
	shed.css("height",contHeight * "0.43");	
	var shuiwen1 = $(".shuiwen")
	shuiwen1.css("height",contHeight * "0.43");			
	
	// 水位
	var shuiwei = $("#container2")
	shuiwei.css("height",contHeight * "0.43");

	//溶解氧
	var switchd = $("#container3")
	switchd.css("height",contHeight * "0.50");

	//shipin
	var shipin = $("#container4")
	shipin.css("height",contHeight * "0.55");
	var video = $("#my-video")
	video.css("height",contHeight * "0.50");	

	//地图背景
	var dd = $(".bk img")
	dd.css("height",contHeight * "0.43");

	//tianqi
	var tianqi = $(".tianqi img");
	tianqi.css("height",contHeight * "0.40");

	var ifra1 = $(".ifr .f1 iframe")
	ifra1.css("height",contHeight * "0.14");

	/*var ifra2 = $(".ifr .f2 iframe")
	ifra2.css("height",contHeight * "0.16");
*/
	// switch
	var div2=document.getElementById("div2");
	var div1=document.getElementById("div1");
	div2.onclick=function(){
		div1.className=(div1.className=="close1")?"open1":"close1";
		div2.className=(div2.className=="close2")?"open2":"close2";
	}
	var div4=document.getElementById("div4");
	var div3=document.getElementById("div3");
	div4.onclick=function(){
		div3.className=(div3.className=="close1")?"open1":"close1";
		div4.className=(div4.className=="close2")?"open2":"close2";
	}
	var div6=document.getElementById("div6");
	var div5=document.getElementById("div5");
	div6.onclick=function(){
		div5.className=(div5.className=="close1")?"open1":"close1";
		div6.className=(div6.className=="close2")?"open2":"close2";
	}
	var div8=document.getElementById("div8");
	var div7=document.getElementById("div7");
	div8.onclick=function(){
		div7.className=(div7.className=="close1")?"open1":"close1";
		div8.className=(div8.className=="close2")?"open2":"close2";
	}	
	var div10=document.getElementById("div10");
	var div9=document.getElementById("div9");
	div10.onclick=function(){
		div9.className=(div9.className=="close1")?"open1":"close1";
		div10.className=(div10.className=="close2")?"open2":"close2";
	}	

	// video
	var myPlayer = videojs('my-video');
	videojs("my-video").ready(function(){
		var myPlayer = this;
		myPlayer.play();
	});	
})(window, jQuery)



