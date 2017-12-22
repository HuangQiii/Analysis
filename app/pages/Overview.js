import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Text, StyleSheet, NativeModules, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import Label from '../components/Label';
import Line from '../components/Line';
import Echarts from 'native-echarts';
import Icon from 'react-native-vector-icons/Ionicons';

const url = 'http://gateway.devops.saas.hand-china.com/provide/v1/kanban/getBurndownChart?sprintId=';
const url2 = 'http://gateway.devops.saas.hand-china.com/provide/v1/kanban/getCumulativeFlow?sprintId=';
const token = 'Bearer 31b64e20-12e5-4bb1-9272-21b92235d528';
const { width, height } = Dimensions.get('window');
export default class Overview extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <Icon.Button
                name="md-menu"
                size={28}
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={1}
                onPress={() => {
                    NativeModules.NativeManager.openDrawer()
                }}
            />
        ),
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
        console.log('overview props: ', this.props.screenProps);

        this.state = {
            burnDownOption: {},
            accumulativeFlowGraphOption: {},

            burnDownChartActual: '',
            burnDownChartIdeal: '',

            accumulativeFlowGraph1: '',
            accumulativeFlowGraph2: '',
            accumulativeFlowGraph3: '',
            accumulativeFlowGraph4: '',
        };
    }

    componentDidMount() {
        this.getData('')
        DeviceEventEmitter.addListener('chooseBurnDown', (id) => {
            this.getBurnDownData(id);
        });
        DeviceEventEmitter.addListener('chooseAccumulativeFlowGraph', (id) => {
            this.getAccumulativeFlowGraphData(id);
        });
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('choose');
    }

    getData(id) {
        this.getBurnDownData(id);
        this.getAccumulativeFlowGraphData(id);
    }

    getBurnDownData(id) {
        var ids = id === '' ? 2 : id;
        fetch(url + ids, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    burnDownOption: {
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
                                //x轴点不是段
                                boundaryGap: false,
                                type: 'category',
                                data: responseData["x-data"]
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                            }
                        ],
                        color: ['#F44336', 'rgba(0,0,0,0.26)'],
                        series: [
                            {
                                name: '实际值',
                                type: 'line',
                                data: responseData["y-data"],
                                smooth: true,
                                // symbol: 'none'
                            },
                            {
                                name: '期望值',
                                type: 'line',
                                data: responseData["y-total-data"]
                                // symbol: 'none'
                            },
                        ]
                    },
                })
            })
    }

    getAccumulativeFlowGraphData(id) {
        var ids = id === '' ? 2 : id;
        fetch(url2 + ids, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    accumulativeFlowGraphOption: {
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
                                data: responseData["x-data"]
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                            }
                        ],
                        color: ['#F4B400', '#FF7043', '#4D90FE', '#F953BA', '#1BC123', '#743BE7'],
                        series: [
                            {
                                name: '完成',
                                type: 'line',
                                data: responseData["y-data"][0],
                                smooth: true,
                                // symbol: 'none'
                            },
                            {
                                name: '测试',
                                type: 'line',
                                data: responseData["y-data"][1],
                                smooth: true,
                                // symbol: 'none'
                            },
                            {
                                name: '开发',
                                type: 'line',
                                data: responseData["y-data"][2],
                                smooth: true,
                                // symbol: 'none'
                            },
                            {
                                name: '待开发',
                                type: 'line',
                                data: responseData["y-data"][3],
                                smooth: true,
                                // symbol: 'none'
                            },
                        ]
                    }
                })
            })
    }

    handleBurnDownPress(param) {
        if (param instanceof Array) {
            this.setState({
                burnDownChartActual: param[0].value,
                burnDownChartIdeal: param[1].value,
            });
        }
    }

    handleAccumulativeFlowGraphPress(param) {
        if (param instanceof Array) {
            this.setState({
                accumulativeFlowGraph1: param[0].value,
                accumulativeFlowGraph2: param[1].value,
                accumulativeFlowGraph3: param[2].value,
                accumulativeFlowGraph4: param[3].value,
            });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.panel}>
                        <View style={{ height: 38, }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>服务监控信息</Text>
                        </View>
                        <View style={[styles.serviceMonitoringData]}>
                            <View style={styles.count}>
                                <View style={styles.countColumn}>
                                    <Label
                                        text={'部署频率'}
                                        number={29}
                                        unit={'/天'}
                                    />
                                    <Label
                                        text={'变更时长'}
                                        number={29}
                                        marginTop={10}
                                        unit={'/小时'}
                                    />
                                </View>
                                <View style={styles.countColumn}>
                                    <Label
                                        text={'变更完成率'}
                                        number={29}
                                        unit={'%'}
                                    />
                                    <Label
                                        text={'问题平均处理时长'}
                                        number={8}
                                        marginTop={10}
                                        unit={'小时'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.panel}>
                        <View style={{}}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>燃尽图</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigate('SelectBurnDown')}
                            >
                                <View style={{ height: 38, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: -4 }]}>{'冲刺一'}</Text>
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

                            <Line
                                text={'实际值'}
                                color={'#F44336'}
                                value={this.state.burnDownChartActual.toString()}
                            />
                            <Line
                                text={'期望值'}
                                value={this.state.burnDownChartIdeal.toString()}
                            />
                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.burnDownOption} height={250} width={width} appPath={this.props.screenProps.appPath} onPress={(param) => { this.handleBurnDownPress(param) }} />
                            </View>

                        </View>
                    </View>
                    <View style={styles.panel}>
                        <View style={{}}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>累计流图</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigate('SelectAccumulativeFlowGraph')}
                            >
                                <View style={{ height: 38, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: -4 }]}>{'冲刺一'}</Text>
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

                            <Line
                                text={'完成'}
                                value={this.state.accumulativeFlowGraph1.toString()}
                                color={'#F4B400'}
                            />
                            <Line
                                text={'测试'}
                                value={this.state.accumulativeFlowGraph2.toString()}
                                color={'#FF7043'}
                            />
                            <Line
                                text={'开发'}
                                value={this.state.accumulativeFlowGraph3.toString()}
                                color={'#4D90FE'}
                            />
                            <Line
                                text={'待开发'}
                                value={this.state.accumulativeFlowGraph4.toString()}
                                color={'#F953BA'}
                            />
                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.accumulativeFlowGraphOption} height={250} width={width} appPath={this.props.screenProps.appPath} onPress={(param) => { this.handleAccumulativeFlowGraphPress(param) }} />
                            </View>

                        </View>
                    </View>
                </View >
            </ScrollView >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F2',
        flexDirection: 'column',
        paddingTop: 10
    },
    panel: {
        backgroundColor: 'rgba(255,255,255,0.87)',
        margin: 10,
        marginTop: 0,
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
    count: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'space-between',
    },
    countColumn: {
        justifyContent: 'space-between'
    }
});