(function (win,$){
   var dom = document.getElementById("container3");
   var myChart = echarts.init(dom);
   myChart.showLoading(  
      {
         text: 'loading……',
         color: '#07CFFE',
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
            dataType:'json',
            data,
         })
         .done(data => getTmp(data))
         .fail(err => console.log(err))
      }
   }
   function getTmp(data){
      var app = {};
      let name =[];
      let value = [];
      data.data.forEach(item => {
         name.push(item.name);
         value.push(item.value)

      })
      // console.log(data)
      // console.log(data.data)
     // let  aaa=data.data;
      var option = {
          title : {
              text: 'DO溶解氧',
              // x:'center',
              textStyle:{
                fontWeight: 'normal',
                fontSize:20,
                color:'#04FCB3'
              },
              left: '5%',
              top:'1%'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)",
              
          },
          legend: {
              x : 'center',
              y : 'bottom',
              textStyle:{
                color:'#9B9A9A'
              },
              data:name
          },
          
          calculable : true,
          series : [
              {
                  name:'溶解氧',
                  type:'pie',
                  color: ['#2E9BF5', '#0DC5F2', '#15E2E7', '#4DEB85', '#FFDB5C','#F81E2B', '#FF5105', '#5676F8', '#0AE9B1', '#FA723C', '#9D96F5', '#A2D1F9', '#BFD418'],
                  radius : [35, 110],
                  center : ['50%', '40%'],
                  roseType : 'area',
                  label: {
                    /*  normal: {
                          show: false
                      },*/
                      emphasis: {
                          show: true
                      }
                  },
                  lableLine: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:data.data

              }
          ]
      };
   
   // var app = {};
   // option = null;
   
      myChart.hideLoading();
      myChart.setOption(option); ////重新绘制  
      window.onresize = myChart.resize
   } 
   setInterval(getData('http://result.eolinker.com/wiIq2ZXfdae4ad50d94c804730c839d8c31940cfbcb8194?uri=rongjieyang.com'),2000);
})(window,jQuery)