(function (win,$){
   var dom = document.getElementById("container1");
   var myChart = echarts.init(dom);
   var myColor=['#eb2100','#eb3600','#d0570e','#d0a00e','#34da62','#00e9db','#00c0e9','#0096f3'];
   myChart.showLoading(
      {
        text:'loading……',
        color:'#FBFE03',
        textColor: '#E39E13',
        maskColor: 'rgba(11, 7, 40, 0.8)',
        zlevel: 0
      }
   );

   let getData = (url,type = 'get', data = {}) => {
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
      let names = [];
      let values = [];
      // let con = [];  //0
      let baikuang = []; //白框99
      let waikuang = []; //外框100
      let waiyuan = []; //外圆 0
      data.data.forEach(item => {
         names.push(item.names)
         values.push(item.values)
         // con
         baikuang.push(99.5)
         waikuang.push(100)
         waiyuan.push(0)
      })
      // console.log(data.data)
      var option = {
        title: {
          text: '水温(℃)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#02FBFE'
          },
          left: '6%',
          // top:'2%',
          // bottom:'90%'
        },
       tooltip : {
            trigger: 'axis',
            // formatter:"{name}",
            axisPointer: {
              // type: 'shadow'
              type: 'cross',
              label: {
                backgroundColor: '#FFAD0A'
              }
            }
          },          
         grid: {
             left: '10%',
             top:'12%',
             right: '-10%',
             bottom: '2%',
             containLabel: true
         },
         xAxis: [{
            show: false,
                       
         }],
         yAxis: [{
            axisTick:'none',
            axisLine:'none',
            offset:'5',
            axisLabel: {
              interval:0,
              // rotate:-5,
                  textStyle: {
                     color: '#ffffff',
                     fontSize:'13',
                  }
               },
               data:names  //name值
         }, 
         {
            axisTick:'none',
            axisLine:'none',
            axisLabel: {
               textStyle: {
                  color: '#ffffff',
                  fontSize:'14',
               }
            },
            // data:con
            data: []
          },
          {
            name:'',
               nameGap:'15',
               nameTextStyle:{
                   color:'#ffffff',
                   fontSize:'14',
               },
            axisLine:{
               lineStyle:{
                  color:'rgba(0,0,0,0)'
               }
           },
           data: [],
         }
         ],
         series: [{
             name: '水温',
             color:'#DDDFDF',
             smooth:true,
             type: 'bar',
             yAxisIndex: 0,
             data:values,//value值
           /*  lineStyle: {
               normal: {
                  width: 1
               }
            },*/
             label:{
                   normal:{
                     show:true,
                     position:'right',
                     formatter:function(param){
                       return param.value + '℃';
                     },
                     textStyle:{
                        color: '#ffffff',
                        fontSize:'12',
                     }
                   }
             },
             barWidth: 5,
             itemStyle: {
                 normal: {
                     color: function(params) {
                             var num=myColor.length;
                             return myColor[params.dataIndex%num]
                     },
                 }
             },
             z: 2
         }, {
             name: '白框',
             type: 'bar',
             yAxisIndex: 1,
             barGap: '-100%',
             data:baikuang,
             // data: [99,99.5,99.5],
             barWidth: 8,
             itemStyle: {
                 normal: {
                     color: '#0e2147',
                     barBorderRadius: 5,
                 }
             },
             z: 1
         }, {
             name: '外框',
             type: 'bar',
             yAxisIndex: 2,
             barGap: '-100%',
             data:waikuang,
             // data: [100,100,100],
             barWidth: 10,
             itemStyle: {
                 normal: {
                     color: function(params) {
                             var num=myColor.length;
                             return myColor[params.dataIndex%num]
                     },
                     barBorderRadius: 5,
                 }
             },
             z: 0
         }, 
         {
             name: '外圆',
             type: 'scatter',
             hoverAnimation: false,
             data:waiyuan,
             // data: [0,0,0],
             yAxisIndex: 2,
             symbolSize: 10,
             itemStyle: {
                 normal: {
                     color: function(params) {
                             var num=myColor.length;
                             return myColor[params.dataIndex%num]
                     },
                     opacity: 1,
                 }
             },
             z: 2
         }]
      };
      myChart.hideLoading();
      myChart.setOption(option);
      window.onresize = myChart.resize
   }
   setInterval(getData('http://result.eolinker.com/wiIq2ZXfdae4ad50d94c804730c839d8c31940cfbcb8194?uri=shuiwen.com'),2000);
})(window,jQuery)
