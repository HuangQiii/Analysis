import React, { Component, } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter } from 'react-native';
import { NativeModules } from 'react-native';
import List from '../components/List';
import Icon from 'react-native-vector-icons/Ionicons';
import Echarts from 'native-echarts';
import Tab from '../components/Tab';
const PRE_PRO = [
    { id: 0, name: '服务提交次数/失败次数', color: 'rgba(77,144,254,1)' },
    { id: 1, name: '服务构建次数/失败次数', color: 'rgba(27,193,35,1)' },
    { id: 2, name: '服务部署次数/失败次数', color: 'rgba(255,153,21,1)' },
    { id: 3, name: '服务发布次数/失败次数', color: 'rgba(249,83,186,1)' },
];
const COLOR = ['rgba(77,144,254,1)', 'rgba(27,193,35,1)', 'rgba(255,153,21,1)', 'rgba(249,83,186,1)'];
const PRETEND_CHART_DATA = [
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
const ARRAY_DATE = ['1小时', '6小时', '1天', '7天', '30天'];
const { width, height } = Dimensions.get('window');
export default class FirstPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `数据持续化服务`,

        headerRight: (
            <Icon.Button
                name="md-checkmark"
                color="transparent"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={1}
                onPress={() => {
                }}
            />
        )
    });

    constructor(props) {
        super(props);

        this.state = {
            type: 0,
            serverTime: '',
            server1: '',
            server2: '',
            option: {},
            nowTime: '1小时',
        };
    }

    componentDidMount() {
        this.changeType()
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('changeType');
    }

    changeType(t) {
        if (this.props.navigation.state.params && this.props.navigation.state.params.type) {
            this.setState({
                type: this.props.navigation.state.params.type,
                option: PRETEND_CHART_DATA[this.props.navigation.state.params.type][0]
            })
        } else {
            this.setState({
                option: PRETEND_CHART_DATA[this.state.type][0]
            });
        }

    }

    changeTime(param) {
        this.setState({
            option: PRETEND_CHART_DATA[this.state.type][ARRAY_DATE.indexOf(param)],
            nowTime: param,
            serverTime: '',
            server1: '',
            server2: '',
        });
    }

    handlePressServer(param) {
        this.setState({
            serverTime: param[0].name,
            server1: param[0].value,
            server2: param[1].value,
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={[styles.panel, { height: 113 }]}>
                    <View style={{ height: 38 }}>
                        <Text style={[styles.fontNormal, { marginTop: -4 }]}>服务监控信息</Text>
                    </View>
                    <View style={[styles.serviceMonitoringData]}>
                        <View style={styles.alarm}>
                            <Text style={[styles.fontNormal, { fontSize: 23, includeFontPadding: false, textAlignVertical: 'top', fontWeight: 'bold' }]}>0</Text>
                            <Text style={[styles.fontNormal, { includeFontPadding: false, textAlignVertical: 'top', marginTop: -1 }]}>已警报</Text>
                        </View>
                        <View style={styles.count}>
                            <View style={styles.countColumn}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'rgba(77,144,254,1)', }}>●  </Text><Text style={styles.fontNormal}>提交次数    53</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'rgba(27,193,35,1)' }}>●  </Text><Text style={styles.fontNormal}>构建次数    42</Text>
                                </View>
                            </View>
                            <View style={styles.countColumn}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'rgba(255,153,21,1)' }}>●  </Text><Text style={styles.fontNormal}>部署次数    42</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'rgba(249,83,186,1)' }}>●  </Text><Text style={styles.fontNormal}>发布次数    21</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.panel,]}>
                    <TouchableOpacity
                        onPress={() => navigate('Total', { type: this.state.type })}
                    >
                        <View style={{ height: 38, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={styles.fontNormal}>{PRE_PRO[this.state.type].name}</Text>
                            <Icon
                                name="ios-arrow-forward"
                                color="rgba(0,0,0,0.9)"
                                size={14}
                                backgroundColor="transparent"
                                underlayColor="transparent"
                                activeOpacity={1}
                                onPress={() => {
                                }}
                            />

                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Tab
                                text={'1小时'}
                                borderLeftWidth={1}
                                onPress={() => this.changeTime('1小时')}
                                active={this.state.nowTime === '1小时'}
                            />
                            <Tab
                                text={'6小时'}
                                onPress={() => this.changeTime('6小时')}
                                active={this.state.nowTime === '6小时'}
                            />
                            <Tab
                                text={'1天'}
                                onPress={() => this.changeTime('1天')}
                                active={this.state.nowTime === '1天'}
                            />
                            <Tab
                                text={'7天'}
                                onPress={() => this.changeTime('7天')}
                                active={this.state.nowTime === '7天'}
                            />
                            <Tab
                                text={'30天'}
                                onPress={() => this.changeTime('30天')}
                                active={this.state.nowTime === '30天'}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <Icon
                                name="md-calendar"
                                color="rgba(0,0,0,0.9)"
                                size={26}
                                backgroundColor="transparent"
                                underlayColor="transparent"
                                activeOpacity={1}
                                onPress={() => {
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ paddingRight: 11, justifyContent: 'center' }}>
                                <Icon
                                    name="md-time"
                                    color="rgba(0,0,0,0.9)"
                                    size={14}
                                    backgroundColor="transparent"
                                    underlayColor="transparent"
                                    activeOpacity={1}
                                    onPress={() => {
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.fontNormal}>时间</Text>
                            </View>
                            <Text>{this.state.serverTime}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                            <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                <Text style={{ color: COLOR[this.state.type], fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.fontNormal}>服务提交次数</Text>
                            </View>
                            <Text>{this.state.server1}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                            <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                <Text style={{ color: 'rgba(0,0,0,0.26)', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.fontNormal}>服务提交失败次数</Text>
                            </View>
                            <Text>{this.state.server2}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                            <Echarts option={this.state.option} height={250} width={width} onPress={(param) => { this.handlePressServer(param) }} />
                        </View>

                    </View>
                </View>
                {/*<Echarts option={option} height={260} width={width - 48} />*/}
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        backgroundColor: '#F1F1F2',
        flexDirection: 'column'
    },
    panel: {
        backgroundColor: 'rgba(255,255,255,0.87)',
        margin: 10,
        marginBottom: 0,
        padding: 12,
        paddingBottom: 16,
        elevation: 1
    },
    fontNormal: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 14,
    },
    serviceMonitoringData: {
        flex: 1,
        flexDirection: 'row'
    },
    alarm: {
        // height: 51,
        width: 74,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    count: {
        flex: 1,
        // height: 51,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'space-between',
    },
    countColumn: {
        justifyContent: 'space-between'
    }
});