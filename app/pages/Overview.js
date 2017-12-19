import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Text, StyleSheet, NativeModules } from 'react-native';
import Label from '../components/Label';
import Line from '../components/Line';
import Echarts from 'native-echarts';
import Icon from 'react-native-vector-icons/Ionicons';

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

            burnDownChartTime: '',
            burnDownChartActual: '',
            burnDownChartIdeal: '',

            accumulativeFlowGraphTime: '',
            accumulativeFlowGraph1: '',
            accumulativeFlowGraph2: '',
            accumulativeFlowGraph3: '',
            accumulativeFlowGraph4: '',
            accumulativeFlowGraph5: '',
            accumulativeFlowGraph6: '',
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
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
                        data: ['12/09', '12/10', '12/11', '12/12', '12/13', '12/14']
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
                        data: [500, 360, 330, 220, 40, 0],
                        smooth: true,
                        // symbol: 'none'
                    },
                    {
                        name: '期望值',
                        type: 'line',
                        data: [500, 400, 300, 200, 100, 0],
                        // symbol: 'none'
                    },
                ]
            },
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
                        data: ['12/1/5', '12/1/6', '12/1/7', '12/1/8', '12/1/9']
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
                        data: [0, 150, 190, 250, 160],
                        smooth: true,
                        // symbol: 'none'
                    },
                    {
                        name: '测试',
                        type: 'line',
                        data: [100, 210, 250, 320, 230],
                        smooth: true,
                        // symbol: 'none'
                    },
                    {
                        name: '开发',
                        type: 'line',
                        data: [120, 230, 270, 420, 250],
                        smooth: true,
                        // symbol: 'none'
                    },
                    {
                        name: '待开发',
                        type: 'line',
                        data: [150, 250, 290, 460, 270],
                        smooth: true,
                        // symbol: 'none'
                    },
                    {
                        name: '设计',
                        type: 'line',
                        data: [220, 300, 320, 520, 320],
                        smooth: true,
                        // symbol: 'none'
                    },
                    {
                        name: '需求',
                        type: 'line',
                        data: [280, 320, 350, 620, 360],
                        smooth: true,
                        // symbol: 'none'
                    }
                ]
            }
        })
    }

    handleBurnDownPress(param) {
        if (param instanceof Array) {
            this.setState({
                burnDownChartTime: param[0].name,
                burnDownChartActual: param[0].value,
                burnDownChartIdeal: param[1].value,
            });
        }
    }

    handleAccumulativeFlowGraphPress(param) {
        if (param instanceof Array) {
            this.setState({
                accumulativeFlowGraphTime: param[0].name,
                accumulativeFlowGraph1: param[0].value,
                accumulativeFlowGraph2: param[1].value,
                accumulativeFlowGraph3: param[2].value,
                accumulativeFlowGraph4: param[3].value,
                accumulativeFlowGraph5: param[4].value,
                accumulativeFlowGraph6: param[5].value,
            });
        }
    }

    render() {
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
                        <View style={{ height: 38, }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>燃尽图</Text>
                        </View>
                        <View>
                            <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: -4, }]}>冲刺： 2017/12/11 —— 2017/12/15   日常冲刺</Text>
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
                                <Text>{this.state.burnDownChartTime}</Text>
                            </View>
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
                                <Echarts option={this.state.burnDownOption} height={250} width={width} onPress={(param) => { this.handleBurnDownPress(param) }} />
                            </View>

                        </View>
                    </View>
                    <View style={styles.panel}>
                        <View style={{ height: 38 }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>累计流图</Text>
                        </View>
                        <View>
                            <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: -4 }]}>冲刺： 2017/12/11 —— 2017/12/15   日常冲刺</Text>
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
                                <Text>{this.state.accumulativeFlowGraphTime}</Text>
                            </View>
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
                            <Line
                                text={'设计'}
                                value={this.state.accumulativeFlowGraph5.toString()}
                                color={'#1BC123'}
                            />
                            <Line
                                text={'需求'}
                                value={this.state.accumulativeFlowGraph6.toString()}
                                color={'#743BE7'}
                            />
                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.accumulativeFlowGraphOption} height={250} width={width} onPress={(param) => { this.handleAccumulativeFlowGraphPress(param) }} />
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