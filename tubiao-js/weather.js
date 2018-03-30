(function (win, $) {
	// 获取城市  
 	var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';  
   	$.getScript(  
        cityUrl,  
        function() {  
           var city = remote_ip_info.city; // 获取城市  
           // 获取天气预报  
           $.ajax({  
              url: "http://weather.mail.163.com/weather/xhr/weather/info.do?sid=&uid=&host=&ver=js6&fontface=yahei&style=1&skin=seablue&color=" + city + "&output=json&ak=EGgzZ22dsboWQEcPQ6KDQLknQd3YkkkP",  
              type: "get",  
              dataType: "jsonp",  
              scriptCharset: 'utf-8',//防止乱码，编码格式
              success: function(baiduTQ) {  
                try 
                {  
                    if (baiduTQ == null || baiduTQ.error != 0 || baiduTQ.status != "success" || baiduTQ.results.count == 0) {  
                        document.getElementById("lblTemperature").innerHTML = "--";  
                        document.getElementById("lblWeather").innerHTML = "--";  
                        document.getElementById("lblCurTemp").innerHTML = "--";  
                        return;  
                    }  
                    if (baiduTQ.results[0].weather_data.length > 0) {  
                        var data = baiduTQ.results[0].weather_data[0];  
                        var split = data.date.split("：");  
                        document.getElementById("lblTemperature").innerHTML = city + "[" + data.temperature + "]";  
                        document.getElementById("lblWeather").innerHTML = data.weather;  
                        var curTemp = split.pop();  
                        document.getElementById("lblCurTemp").innerHTML = curTemp.substring(0, curTemp.length - 1);  
                        // 图片
                        // var imgPath = data.dayPictureUrl;  
                        // document.getElementById("cvsToday").src = imgPath;  
                    }  
                }catch (err) {  
                   	alert(err)  
                }  
              }  
           });  
        }
    );
})(window, jQuery)
