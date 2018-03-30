(function (win,$){
	var dom = document.getElementById("container2");
	var myChart = echarts.init(dom);
	myChart.showLoading(  
	{
		text: 'loading……',
		color: '#07FE2F',
		textColor: '#E39E13',
		maskColor: 'rgba(11, 7, 40, 0.8)',
		zlevel: 0
	}  
	);
	let getData =(url, type = 'get', data = {}) => {
		return () => {
			$.ajax({
				url,
				type,
				dataType:'json',
				data,
			})
			.done(data => getTmp(data))
			.fail(err => console.log(err))
		}
	}
	function getTmp(data){
		let categories=[];  
		let values=[];

		data.data.forEach(item => {
			categories.push(item.categories)
			values.push(item.values)
		})

		var option = {
			title: {
				text: '水位(m)',
				textStyle: {
					fontWeight: 'normal',
					fontSize: 20,
					color: '#FCCE70'
				},
				left: '6%',
				top:'2%'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#FFAD0A'
					}
				}
			},
      	grid: {
      		left: '3%',
      		right: '4%',
      		bottom: '3%',
      		containLabel: true
      	},
      	xAxis : [
      	{
      		type : 'category',
      		boundaryGap : false,
      		axisLabel:{
               interval:0,//横轴全部显示
               // rotate:-20//角度倾斜显示
            },
      		axisLine: {
      			lineStyle: {
      				color: '#7A849E'
      			}
      		},
      		data :categories,
      	}
      	],
      	yAxis : [
      	{
      		type : 'value',
      		axisTick: {
      			show: false
      		},
      		axisLine: {
      			lineStyle: {
      				color: '#57617B'
      			}
      		},
      		axisLabel: {
      			margin: 10,
      			textStyle: {
      				fontSize: 14
      			}
      		},
      		splitLine: {
      			lineStyle: {
      				color: '#57617B'
      			}
      		} 
      	}
      	],

      	series : [
      	{
      		name:'水位',
      		color:'#DDDFDF',
      		smooth:true,
      		type:'line',
      		lineStyle: {
      			normal: {
      				width: 1
      			}
      		},
      		label: {
      			normal: {
      				show: true,
      				position: 'top'
      			}
      		},
      		areaStyle: {
      			normal: {
      				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      					offset: 0,
      					color: 'rgba(137, 189, 27, 1)'
      				}, {
      					offset: 0.8,
      					color: 'rgba(137, 189, 27, 0.2)'
      				}], false),
      				shadowColor: 'rgba(0, 0, 0, 0.5)',
      				shadowBlur: 10
      			}
      		},
      		itemStyle: {
      			normal: {
      				color: 'rgb(33,218,153)'
      			}
      		},
      		'data':values
      	}
      	]
      };
      myChart.hideLoading();  
    myChart.setOption(option); ////重新绘制 
    window.onresize = myChart.resize

 }
 setInterval(getData('http://result.eolinker.com/kXuwIzV709203cf4ef636e662aa02643472f524e9eba782?uri=shuiwei.com'),2000)
})(window,jQuery)