(function (win,$){
	var dom = document.getElementById("container1");
	var myChart = echarts.init(dom);
	myChart.showLoading(  
	{
		text: 'loading……',
		color: '#FE3E07',
		textColor: '#E39E13',
		maskColor: 'rgba(11, 7, 40, 0.8)',
		zlevel: 0
	}  
	);

	let getData = (url, type = 'get', data = {}) => {

		return () => {
			$.ajax({
				url,
				type,
				dataType: 'json',
				data,
			})
			.done(data => getTmp(data))
			.fail(err => console.log(err))
		}

	}
	function getTmp(data){
      // console.log(data);
      let categories=[];  
      let temperature=[];
      let humidity=[];

      // var temperature = Object.keys(data).length;
      // console.log(temperature)
      data.data.forEach(item => {
      	categories.push(item.categories)
      	temperature.push(item.temperature)
      	humidity.push(item.humidity)
      })
      var option = {
      	title: {
      		text: '温湿度',
      		subtext: '大棚温湿度',
      		textStyle: {
      			fontWeight: 'normal',
      			fontSize: 20,
      			color: '#3DF679'
      		},
      		left: '6%',
      		top:'1.5%'
      	},
      	tooltip: {
      		trigger: 'axis',
      		axisPointer: {
      			type: 'shadow'
      		}
      	},
      	legend: {
      		data: ['温度', '湿度'],
      		textStyle: {
      			fontWeight:'bolder',
      			fontSize:14,
      			color: '#FE8A1D',
      		} 
      	},
      	grid: {
      		left: '3%',
      		right: '4%',
      		bottom: '3%',
      		containLabel: true
      	},
      	xAxis: {
      		type: 'value',
      		splitLine:{show: false},//去除网格线
      		boundaryGap: [0, 0.01],
      		axisLine: {
      			lineStyle: {
      				color: '#ccc'
      			}
      		}      		
      	},
      	yAxis: {
      		type: 'category',
      		axisLine: {
      			lineStyle: {
      				color: '#ccc'
      			}
      		},     		
      		data: categories
      	},
      	series: [
      	{
      		name: '温度',
      		type: 'bar',
      		itemStyle: {
      			normal: {
      				barBorderRadius: 5,
      				color: '#00c0e9'
      			}
      		}, 
      		data: temperature

      	},
      	{
      		name: '湿度',
      		type: 'bar',
      		itemStyle: {
      			normal: {
      				barBorderRadius: 5,
      				color: '#34da62'
      			}
      		}, 
      		data: humidity
      	}
      	]
      };  
      myChart.hideLoading();  
     myChart.setOption(option); ////重新绘制  
     window.onresize = myChart.resize
  }
   setInterval(getData('http://result.eolinker.com/kXuwIzV709203cf4ef636e662aa02643472f524e9eba782?uri=wenshidu.com'), 2000); // 调用函数

})(window,jQuery)