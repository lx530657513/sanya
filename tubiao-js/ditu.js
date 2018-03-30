$('#document').ready(function(){
 getEcharts();
});
function getEcharts(){
    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
    require.config({
      paths: {
        echarts: './js'
      }
    });
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
      [
      'echarts',
      'echarts/chart/map'
      ],
      function (ec) {
            // --- 地图 ---
            var myChart2 = ec.init(document.getElementById('mainMap'));
            myChart2.setOption({
              dataRange: {
                min : 0,
                max : 100,
                x:"2%",
                calculable : true,
                color: ['#FF1717', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                  color:'#fff'
                },
                show: true

              },
              series : [
              {
                name: '大棚',
                type: 'map',
                roam: true,
                hoverable: false,
                mapType: 'china',
                itemStyle:{
                  normal:{
                    // borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                    areaStyle:{
                      color: 'rgba(27,27,27,0.01)'
                    }
                  }
                },
                data:[],
                markLine : {
                 smooth:true,
                 symbol: ['none', 'circle'],  
                 symbolSize : 1,
                 itemStyle : {
                   normal: {
                     color:'#fff',
                     borderWidth:1,
                     borderColor:'rgba(30,144,255,0.5)'
                   }
                 },
               data : [],
               },
               geoCoord: {
                 '数据中心':[110,30],
                 '鱼塘一':[70,20],
                 '一号棚':[86,40],
                 // '鱼塘三': [100.479,23.1152],
                 '鱼塘四': [135,21],
                 '鱼塘五':[110,47],
                 '鱼塘六':[77.11,49.97],
                 '办公楼': [122,36]
               },
               markPoint : {
                 symbol:'emptyCircle',
                 symbolSize : function (v){
                   return 10 + v/10
                 },
                 effect : {
                   show: true,
                   shadowBlur : 0
                 },
                 itemStyle:{
                   normal:{
                     label:{show:false}
                   },
                   emphasis: {
                     label:{position:'top'}
                   }
                  },
               data : [
                 {name:'鱼塘一',value:50},
                 {name:'一号棚',value:40},
                 // {name:'鱼塘三',value:70},
                 {name:'鱼塘四',value:95},
                 {name:'鱼塘五',value:30},
                 {name:'鱼塘六',value:1},
                 {name:'办公楼',value:80}
                 ]
               }
            },
             {
               name: 'Top',
               type: 'map',
               mapType: 'china',
               data:[],
               markLine : {
                 smooth:true,
                 effect : {
                   show: true,
                   scaleSize: 1,
                   period: 30,
                   color: '#fff',
                   shadowBlur: 10
                 },
                 itemStyle : {
                   normal: {
                     label:{show:false},
                     borderWidth:1,
                     lineStyle: {
                       type: 'solid',
                       shadowBlur: 10
                     }
                   }
                 },
                 data : [
                 [{name:'鱼塘一'}, {name:'数据中心',value:50}],
                 [{name:'一号棚'}, {name:'数据中心',value:40}],
                 // [{name:'鱼塘三'}, {name:'数据中心',value:70}],
                 [{name:'鱼塘四'}, {name:'数据中心',value:95}],
                 [{name:'鱼塘五'}, {name:'数据中心',value:30}],
                 [{name:'鱼塘六'}, {name:'数据中心',value:1}],
                 [{name:'办公楼'}, {name:'数据中心',value:80}]
                 ]
               },
              /* markPoint : {
                 symbol:'emptyCircle',
                 symbolSize : function (v){
                   return 0.1
                 },
                 effect : {
                   show: false,
                   shadowBlur : 0
                 },
                 itemStyle:{
                   normal:{
                     label:{show:true,
                       position:'top',
                       textStyle: {
                         fontSize: 14
                       }
                     }
                   },
                   emphasis: {
                     label:{show:false}
                   }
                 },
                 data : [
                 {name:'鱼塘一',value:50},
                 {name:'一号棚',value:40},
                 {name:'鱼塘三',value:70},
                 {name:'鱼塘五',value:30},
                 {name:'鱼塘四',value:95},
                 {name:'鱼塘六',value:10},
                 {name:'办公楼',value:80}
                 ]
               }*/
             }
             ]
        });

   window.onresize = myChart2.resize;
   myChart2.on('click', function (params) {
      console.log(params.name);
      var div1 = $(".shuiwen");
      var div2 = $("#shed").css("height");
      if(params.name == "办公楼"){
         var div1 = $(".shuiwen");
         div1.css("top",0);   
      }  
      if(params.name == "一号棚"){
         div1.css("top","-"+div2); 
         console.log(obj1)
         obj1.text = "一号棚";
         obj1.data = [32,105,66,49,74];
         console.log(obj1);
         myChartPeng.setOption({
            title:{
               text: obj1.text
            },
            series:[{
               data:obj1.data
            }]
         });   
      }
      /*if(params.name == "鱼塘六"){
         div1.css("top","-"+div2);

         obj1.text = "二号棚";
         obj1.data = [30, 20, 36, 10];
         console.log(obj1);
         myChartPeng.setOption({
            title:{
               text: obj1.text
            },
            series:[{
               data:obj1.data
            }]
         });         
      }*/


   });      
});

}
