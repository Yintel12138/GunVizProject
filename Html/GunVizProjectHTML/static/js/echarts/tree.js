// import * as echarts from 'echarts';

var ROOT_PATH =
  'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

var chartDom2 = document.getElementById('tree-graph');
var myChart2 = echarts.init(chartDom2);
var option3;

myChart2.showLoading();
$.get(ROOT_PATH + '/data/asset/data/flare.json', function (data) {
  myChart2.hideLoading();
  myChart2.setOption(
    (option3 = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '18%',
          bottom: '14%',
          layout: 'radial',
          symbol: 'emptyCircle',
          symbolSize: 7,
          initialTreeDepth: 3,
          animationDurationUpdate: 750,
          emphasis: {
            focus: 'descendant'
          }
        }
      ]
    })
  );
});

option3 && myChart2.setOption(option3);
