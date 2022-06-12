// import * as echarts from 'echarts';

var chartDom6 = document.getElementById('gender-column');
var myChart6 = echarts.init(chartDom6);
var option6;

option6 = {
  // title: {
  //   text: 'World Population'
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  textStyle: {
    // fontSize: 18,//字体大小 
    color: '#ffffff'//字体颜色 
  },
  // legend: {
  //   textStyle: {
  //     // fontSize: 18,//字体大小 
  //     color: '#ffffff'//字体颜色 
  //   },
  // },
  grid: {
    top: '2%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['女性','男性']    
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  series: [
    {
      name: '嫌疑人',
      type: 'bar',
      data: [11180,160493],
      // color: '#2e85f6'
      itemStyle: {
        normal: {
          barBorderRadius: [10,10,0,0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#e65857' },
              { offset: 1, color: '#761d33' }
            ]
          )
        }
      },
    },
    {
      name: '受害者',
      type: 'bar',
      data: [29471,131276],
      color: '#9a2b27',
      itemStyle: {
        normal: {
          barBorderRadius: [10,10,0,0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#034871' },
              { offset: 1, color: '#9deccf' }
            ]
          )
        }
      },
    }
  ]
};

option6 && myChart6.setOption(option6);
