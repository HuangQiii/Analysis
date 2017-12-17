import React, { Component, } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight } from 'react-native';
import { NativeModules } from 'react-native';
import List from '../components/List';
import Icon from 'react-native-vector-icons/Ionicons';
import Echarts from 'native-echarts';

const { width, height } = Dimensions.get('window');
export default class FirstPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `概览`,
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

        this.state = {
            burnDownChartTime: '',
            burnDownChartActual: '',
            burnDownChartIdeal: '',
            burnDownChartSelected: '',

            accumulativeFlowGraphTime: '',
            accumulativeFlowGraph1: '',
            accumulativeFlowGraph2: '',
            accumulativeFlowGraph3: '',
            accumulativeFlowGraph4: '',
            accumulativeFlowGraph5: '',
            accumulativeFlowGraph6: '',

            option1: {},
            option: {}
        };
    }

    componentDidMount() {
        this.getNumber()
    }

    getNumber() {
        this.setState({
            option1: {
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
            option: {
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

    handlePress(param) {
        this.setState({
            burnDownChartTime: param[0].name,
            burnDownChartActual: param[0].value,
            burnDownChartIdeal: param[1].value,
        });
    }

    handlePress2(param) {
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

    render() {


        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.panel,]}>
                        <View style={{ height: 38, }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>服务监控信息</Text>
                        </View>
                        <View style={[styles.serviceMonitoringData]}>
                            <View style={styles.count}>
                                <View style={styles.countColumn}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>部署频率</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500' }]}>29</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>/天</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>变更时长</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500' }]}>29</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>/小时</Text>
                                    </View>

                                </View>
                                <View style={styles.countColumn}>
                                    <View style={{ flexDirection: 'row', marginTop: 1 }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>变更完成率</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500' }]}>29</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>%</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>问题平均处理时长</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500' }]}>8</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>/小时</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.panel,]}>
                        <View style={{ height: 38, }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>燃尽图</Text>
                        </View>
                        <View>
                            <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: -4, }]}>冲刺： 1025 - 1125 XXX</Text>
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#F44336', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>实际值</Text>
                                </View>
                                <Text>{this.state.burnDownChartActual}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: 'rgba(0,0,0,0.26)', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>期望值</Text>
                                </View>
                                <Text>{this.state.burnDownChartIdeal}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.option1} height={250} width={width} onPress={(param) => { this.handlePress(param) }} />
                            </View>

                        </View>
                    </View>

                    <View style={[styles.panel, { marginBottom: 10 }]}>
                        <View style={{ height: 38 }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>累计流图</Text>
                        </View>
                        <View>
                            <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: -4 }]}>冲刺： 1025 - 1125 XXX</Text>
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#F4B400', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>完成</Text>
                                </View>
                                <Text>{this.state.accumulativeFlowGraph1}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#FF7043', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>测试</Text>
                                </View>
                                <Text>{this.state.accumulativeFlowGraph2}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#4D90FE', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>开发</Text>
                                </View>
                                <Text>{this.state.accumulativeFlowGraph3}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#F953BA', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>待开发</Text>
                                </View>
                                <Text>{this.state.accumulativeFlowGraph4}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#1BC123', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>设计</Text>
                                </View>
                                <Text>{this.state.accumulativeFlowGraph5}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#743BE7', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>需求</Text>
                                </View>
                                <Text>{this.state.accumulativeFlowGraph6}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.option} height={250} width={width} onPress={(param) => { this.handlePress2(param) }} />
                            </View>

                        </View>
                    </View>
                    {/*<Echarts option={option} height={260} width={width - 48} />*/}
                </View >
            </ScrollView >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: height,
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