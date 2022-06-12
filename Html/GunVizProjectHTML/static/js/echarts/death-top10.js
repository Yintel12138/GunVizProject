// import * as echarts from 'echarts';

var chartDom5 = document.getElementById('death-top10');
var myChart5 = echarts.init(chartDom5);
var option5;

option5 = {
  // backgroundColor: '#2c343c',
  // title: {
  //   text: 'Customized Pie',
  //   left: 'center',
  //   top: 20,
  //   textStyle: {
  //     color: '#ccc'
  //   }
  // },

  tooltip: {
    trigger: 'item',
  },
  visualMap: {
    show: false,
    min: 0,
    max: 120,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: '事件',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        {"date":"2016/6/12","state":"Florida","city_or_county":"Orlando","name":"1912 S Orange Avenue","n_killed":50,"n_injured":53,"value":103},
        {"date":"2017/11/5","state":"Texas","city_or_county":"Sutherland Springs","name":"216 4th St","n_killed":27,"n_injured":20,"value":47},
        {"date":"2015/12/2","state":"California","city_or_county":"San Bernardino","name":"1365 South Waterman Avenue","n_killed":16,"n_injured":19,"value":35},
        {"date":"2015/5/17","state":"Texas","city_or_county":"Waco","name":"4671 S Jack Kultgen Fwy","n_killed":9,"n_injured":18,"value":27},
        {"date":"2017/7/1","state":"Arkansas","city_or_county":"Little Rock","name":"220 W 6th St","n_killed":0,"n_injured":25,"value":25},
        {"date":"2016/7/25","state":"Florida","city_or_county":"Fort Myers","name":"3580 Evans Ave","n_killed":2,"n_injured":19,"value":21},
        {"date":"2014/4/2","state":"Texas","city_or_county":"Fort Hood","name":"Motor Pool Road and Tank Destroyer Boulevard","n_killed":4,"n_injured":16,"value":20},
        {"date":"2015/10/1","state":"Oregon","city_or_county":"Roseburg","name":"1140 Umpqua College Rd","n_killed":10,"n_injured":9,"value":19},
        {"date":"2016/2/25","state":"Kansas","city_or_county":"Hesston","name":"200 S Ridge Rd","n_killed":4,"n_injured":14,"value":18},
        {"date":"2017/11/14","state":"California","city_or_county":"Corning","name":"17357 Stagecoach Rd","n_killed":6,"n_injured":12,"value":18},
      ].sort(function (a, b) {
        return a.loss - b.loss;
      }),
      roseType: 'radius',
      label: {
        color: '#ffffff'
        
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};

option5 && myChart5.setOption(option5);
