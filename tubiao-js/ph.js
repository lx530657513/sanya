(function (win,$){
 var dom = document.getElementById("container4");
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
      let values=[];

      // var values = Object.keys(data).length;
      // console.log(values)
      data.data.forEach(item => {
       categories.push(item.categories)
       values.push(item.values)
     })
      var option = {
        title: {
          text: 'PH值',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#8EFE08'
          },
          left: '6%',
          top:'2%'
        },         
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#6841CB',
            }
          }
        },
        legend: {    
         data: ['PH'],
         textStyle: {
           fontWeight:'bolder',
           fontSize:18,
           color: '#FE8A1D',
         }   
       }, 
       xAxis: [    
       {    
         type: 'category',    
         data: categories,
         axisLabel:{
               interval:0,//横轴全部显示
               // rotate:-20//角度倾斜显示
             },         
             axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }   
          }    
          ],    
          yAxis: [    
          {    
           type: 'value',
                     splitLine:{show: false},//去除网格线
                     axisLine: {
                      lineStyle: {
                        color: '#ccc'
                      }
                    }   
                  }    
                  ],    
                  series: [
                  {
                    name: 'PH',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 10,
                    color:'#0AF422',
                    data: values
                  },    
                  {    
                    name: 'PH',    
                    'type': 'bar',
                    barWidth: 10,
                    itemStyle: {
                     normal: {
                       barBorderRadius: 6,
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                         [
                         {offset: 0, color: '#14c8d4'},
                         {offset: 1, color: '#43eec6'}
                         ]
                         )
                     }
                   },    
                   'data': values    
                 }    
                 ]    
               };  
               myChart.hideLoading();  
     myChart.setOption(option); ////重新绘制  
     window.onresize = myChart.resize
   }
   setInterval(getData('http://result.eolinker.com/wiIq2ZXfdae4ad50d94c804730c839d8c31940cfbcb8194?uri=phshuju.com'), 2000); // 调用函数

 })(window,jQuery)