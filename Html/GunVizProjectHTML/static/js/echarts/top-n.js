var chartDom3 = document.getElementById('top-n');
var myChart3 = echarts.init(chartDom3);
var option3;
var salvProName = ['Illinois', 'California', 'Florida', 'Texas', 'Ohio', 'New York',
    'Georgia', 'Pennsylvania', 'North Carolina', 'Louisiana', 'Tennessee',
    'South Carolina', 'Missouri', 'Virginia', 'Massachusetts', 'Indiana',
    'Maryland', 'Michigan', 'New Jersey', 'Alabama'];
var salvProValue = [16695, 15171, 14197, 12890, 9643, 9359, 8501, 8413, 8263, 7655,
    7241, 6567, 6256, 5650, 5611, 5517, 5422, 5391, 5149, 5122];
var salvProMax = [];//背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
}
option3 = {
    // backgroundColor: "#620103",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
        },
        data: salvProValue
    }],
    series: [{
        name: '值',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgb(57,89,255,1)'
                }, {
                    offset: 1,
                    color: 'rgb(46,200,207,1)'
                }]),
            },
        },
        barWidth: 20,
        data: salvProValue
    },
    {
        name: '背景',
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        data: salvProMax,
        itemStyle: {
            normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30,
            }
        },
    },
    ]
};
option3 && myChart3.setOption(option3);

