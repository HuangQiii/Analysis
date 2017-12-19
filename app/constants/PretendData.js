export default PRETEND_CHART_DATA = [
    [{
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '2：15', '3：15', '4:15', '5:15', '6:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(77,144,254,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 4, 5, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '7：15', '13：15', '19:15', '1:15', '7:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(77,144,254,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 6, 3, 3, 2]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['12/13', '12/14', '12/15', '12/16', '12/17', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(77,144,254,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [12, 2, 8, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 1, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['11/13', '11/20', '11/27', '12/4', '12/11', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(77,144,254,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [32, 47, 66, 8, 12]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [2, 0, 0, 3, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['7', '8', '9', '10', '11', '12']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(77,144,254,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [127, 222, 306, 380, 334]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },],

    [{
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '2：15', '3：15', '4:15', '5:15', '6:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(27,193,35,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 4, 5, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '7：15', '13：15', '19:15', '1:15', '7:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(27,193,35,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 6, 3, 3, 2]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['12/13', '12/14', '12/15', '12/16', '12/17', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(27,193,35,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [12, 2, 8, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 1, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['11/13', '11/20', '11/27', '12/4', '12/11', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(27,193,35,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [32, 47, 66, 8, 12]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [2, 0, 0, 3, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['7', '8', '9', '10', '11', '12']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(27,193,35,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [127, 222, 306, 380, 334]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },],

    [{
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '2：15', '3：15', '4:15', '5:15', '6:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(255,153,21,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 4, 5, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '7：15', '13：15', '19:15', '1:15', '7:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(255,153,21,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 6, 3, 3, 2]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['12/13', '12/14', '12/15', '12/16', '12/17', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(255,153,21,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [12, 2, 8, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 1, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['11/13', '11/20', '11/27', '12/4', '12/11', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(255,153,21,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [32, 47, 66, 8, 12]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [2, 0, 0, 3, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['7', '8', '9', '10', '11', '12']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(255,153,21,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [127, 222, 306, 380, 334]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },],

    [{
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '2：15', '3：15', '4:15', '5:15', '6:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(249,83,186,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 4, 5, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['1：15', '7：15', '13：15', '19:15', '1:15', '7:15']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(249,83,186,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [2, 6, 3, 3, 2]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['12/13', '12/14', '12/15', '12/16', '12/17', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(249,83,186,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [12, 2, 8, 3, 6]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 1, 0, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['11/13', '11/20', '11/27', '12/4', '12/11', '12/18']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(249,83,186,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [32, 47, 66, 8, 12]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [2, 0, 0, 3, 0]
            },
        ]
    },
    {
        animation: true,
        tooltip: {
            trigger: 'axis',
            showContent: true,
            formatter: function (params, ticket, callback) {
                // alert(params[0].name)
                window.postMessage(JSON.stringify(params));
            }
        },
        xAxis: [
            {
                boundaryGap: false,
                data: ['7', '8', '9', '10', '11', '12']
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        color: ['rgba(249,83,186,1)', 'rgba(0,0,0,0.26)'],
        series: [
            {
                name: '服务提交次数',
                type: 'line',
                data: [127, 222, 306, 380, 334]
            },
            {
                name: '服务提交失败次数',
                type: 'line',
                data: [0, 0, 0, 0, 0]
            },
        ]
    },],
];