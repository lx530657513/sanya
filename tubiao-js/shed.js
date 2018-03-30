var obj1 = {
		text:'一号棚',
		data:[30, 20, 36, 10,24],
	};
var dom = document.getElementById('shed');
var myChartPeng = echarts.init(dom);
	var myColor=['#eb2100','#d0a00e','#34da62','#00e9db','#00c0e9'];
	var index = null;
	var option = {
		title: {
			text: obj1.text,
			textStyle: {
				fontWeight: 'normal',
				fontSize: 20,
				color: '#05CE01'
			}, 
			left: '6%',
			top:'1.5%'
		},
		tooltip: {
			textStyle:{
				align:'left',
				color:'red'
			},
			backgroundColor: 'rgba(100,255,255,0.8)',
			borderRadius: 5
		},

		xAxis: {
			axisLine: {
				lineStyle: {
					color: '#BDBCBC'
				}
			},
			data: ["温度","湿度","二氧化碳","呵呵","哈啊哈"]
		},
		yAxis: {
        	// splitLine:{show: false},
        	axisLine: {
        		lineStyle: {
        			color: '#B5B4B4'
        		}
        	}        
        },
        series: [{
        	name: '销量',
        	type: 'bar',
        	barWidth: 35,
        	data: obj1.data,
        	label:{
        		normal:{
        			show: true, 
        			position: 'top',
        		},
        	},
        	itemStyle: {
        		normal: {
        			barBorderRadius: 10,
        			color: function(params) {
        				var num=myColor.length;
        				return myColor[params.dataIndex%num]
        			},
        		}
        	},            
        }]
    };
    myChartPeng.setOption(option);	