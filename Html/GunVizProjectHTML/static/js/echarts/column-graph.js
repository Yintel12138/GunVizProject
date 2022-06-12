// import * as echarts from 'echarts';

var chartDom4 = document.getElementById('column-graph');
var myChart4 = echarts.init(chartDom4);
var option4;

option4 = {
  // color:'#620103',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Handgun', '9mm', 'Rifle', 'Shotgun', '22 LR', '40 SW', '380 Auto', '45 Auto', '38 Spl', '223 Rem [AR-15]', '12 gauge', 'Other', '7.62 [AK-47]', '357 Mag', '25 Auto', '32 Auto', '20 gauge', '44 Mag', '30-30 Win', '410 gauge', '30-06 Spr', '308 Win', '10mm', '16 gauge', '300 Win', '28 gauge'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        rotate: 60,
        interval: 0,
      }

    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [23465, 5929, 4861, 3994, 3142, 2581, 2269, 2230, 1702, 1361, 1063, 1002, 866, 778, 575, 465, 193, 185, 106, 93, 81, 80, 48, 30, 17, 6],
      // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      itemStyle: {
        normal: {
          barBorderRadius: [3,3,0,0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#956FD4' },
              { offset: 1, color: '#3EACE5' }
            ]
          )
        }
      },
    }
  ],
  textStyle: {
    // fontSize: 18,//字体大小 
    color: '#ffffff'//字体颜色 
  },
};

option4 && myChart4.setOption(option4);
