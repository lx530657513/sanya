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
      let names =[];  //x
      let series1 =[];
      let series2 =[];
      let series3 =[];
      let series4 =[];
     
      $.each(data.yi, function (index, item) {
         names.push(item.categories);    //没个取出并填入数组
         series1.push(item.value);
      });
      $.each(data.er, function (index, item) {
          series2.push(item.value);
      });
      $.each(data.san, function (index, item) {
          series3.push(item.value);
      });
      $.each(data.si, function (index, item) {
          series4.push(item.value);
      });
      // console.log(data);
     /*data.data.forEach(item => {
         value.push(item.value)
         categories.push(item.categories)
     })*/

    var option = {
         title: {
           text: '水位',
           textStyle: {
               fontWeight: 'normal',
               fontSize: 16,
               color: '#F1F1F3'
           },
           left: '6%'
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
        legend: {
            data:['一','二','三','四'],
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            right: '6%',
            textStyle: {
               fontSize: 12,
               color: '#F1F1F3'
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
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                 },
                data :names,
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
         /*dataZoom: [
         {
            "show": true,
            "height": 30,
            "xAxisIndex": [
                0
            ],
            bottom: 15,
            "start": 10,
            "end": 80,
            handleSize: '110%',
            handleStyle:{
                color:"#d3dee5",
                
            },
            textStyle:{
             color:"#fff"},
            borderColor:"#90979c"
        }, 
        {
           "type": "inside",
           "show": true,
           "height": 15,
           "start": 1,
           "end": 35
            }
         ],*/
         series : [
         {
            name:'一',
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
                       color: 'rgba(137, 189, 27, 0.8)'
                   }, {
                       offset: 0.8,
                       color: 'rgba(137, 189, 27, 0)'
                   }], false),
                   shadowColor: 'rgba(0, 0, 0, 0.5)',
                   shadowBlur: 10
               }
            },
            itemStyle: {
               normal: {
                   color: 'rgb(137,189,27)'
               }
            },
            'data':series1
         },
         {
            name:'二',
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
                       color: 'rgba(0, 136, 212, 0.8)'
                   }, {
                       offset: 0.8,
                       color: 'rgba(0, 136, 212, 0)'
                   }], false),
                   shadowColor: 'rgba(0, 0, 0, 0.5)',
                   shadowBlur: 10
               }
            },
            itemStyle: {
               normal: {
                   color: 'rgb(0,136,212)'
               }
            },
            'data':series2
         },
         {
            name:'三',
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
                       color: 'rgba(244, 251, 16, 0.6)'
                   }, {
                       offset: 0.8,
                       color: 'rgba(244, 251, 16, 0)'
                   }], false),
                   shadowColor: 'rgba(0, 0, 0, 0.2)',
                   shadowBlur: 10
               }
            },
            itemStyle: {
               normal: {
                   color: 'rgb(244,251,16)'
               }
            },
            'data':series3
         },
         {
            name:'四',
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
                       color: 'rgba(252, 136, 18, 0.8)'
                   }, {
                       offset: 0.8,
                       color: 'rgba(252, 136, 18, 0)'
                   }], false),
                   shadowColor: 'rgba(0, 0, 0, 0.5)',
                   shadowBlur: 10
               }
            },
            itemStyle: {
               normal: {
                   color: 'rgb(252,136,18)'
               }
            },
            'data':series4
         },
        ]
    };
    myChart.hideLoading();  
    myChart.setOption(option); ////重新绘制 
    window.onresize = myChart.resize
       
   }
   setInterval(getData('http://result.eolinker.com/wiIq2ZXfdae4ad50d94c804730c839d8c31940cfbcb8194?uri=shuiwei.com'),2000)
})(window,jQuery)