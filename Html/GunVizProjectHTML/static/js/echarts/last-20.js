var chartDom3 = document.getElementById('last-20');
var myChart3 = echarts.init(chartDom3);
var option3;
var salvProName = ['Hawaii', 'Vermont', 'Wyoming', 'South Dakota', 'North Dakota',
'Montana', 'Idaho', 'Rhode Island', 'Maine', 'New Hampshire', 'Utah',
'Alaska', 'West Virginia', 'Nebraska', 'New Mexico', 'Delaware',
'Nevada', 'Kansas', 'Minnesota', 'Oregon'];
var salvProValue = [ 270,  452,  480,  518,  542,  597,  610,  843,  849,  917, 1015, 1288,
    1493, 1541, 1562, 1576, 1840, 1992, 2087, 2147];
var salvProMax = [];//背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[salvProValue.length-1])
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

