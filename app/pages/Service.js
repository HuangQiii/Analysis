import React, { Component, } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, NativeModules, DeviceEventEmitter, ToastAndroid } from 'react-native';
import List from '../components/List';
import Echarts from 'native-echarts';
import Tab from '../components/Tab';
import Line from '../components/Line';
import PRETEND_CHART_DATA from '../constants/PretendData';
import Icon from 'react-native-vector-icons/Ionicons';

let url = 'http://gateway.devops.saas.hand-china.com';
let token = 'Bearer 1d4a287d-cde5-4d85-8507-299d8c66c157';

const PRE_PRO = [
    { id: 0, name: '服务提交次数/失败次数', color: 'rgba(77,144,254,1)' },
    { id: 1, name: '服务构建次数/失败次数', color: 'rgba(27,193,35,1)' },
    // { id: 2, name: '服务部署次数/失败次数', color: 'rgba(255,153,21,1)' },
    // { id: 3, name: '服务发布次数/失败次数', color: 'rgba(249,83,186,1)' },
];
const COLOR = ['rgba(77,144,254,1)', 'rgba(27,193,35,1)', 'rgba(255,153,21,1)', 'rgba(249,83,186,1)'];
const ARRAY_DATE = ['今天', '昨天', '近7天', '近30天'];

const { width, height } = Dimensions.get('window');
export default class FirstPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.service.serviceName,

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
            nowTime: '昨天',

            submit: '',
            build: '',
            deploy: '',
            release: '',

            from: '',
            to: '',
        };
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('chooseType', (type) => {
            this.setState({
                type: type,
                nowTime: '昨天',
            });
            this.changeType(type);
        });
        DeviceEventEmitter.addListener('chooseTime', (startDate, endDate) => {
            this.setState({
                from: startDate,
                to: endDate,
                nowTime: '',
            });
            startDate = startDate.split('-').join('%2F');
            endDate = endDate.split('-').join('%2F');
            this.changeType(this.state.type, startDate, endDate);
        });
    }

    componentDidMount() {
        this.changeType(0);
        this.getData();
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('chooseType');
        DeviceEventEmitter.removeAllListeners('chooseTime');
    }

    getData() {
        fetch(url + '/provide/v1/serviceOverview/serviceOverview?projectId=' + this.props.screenProps.proId + '&serviceId=' + this.props.navigation.state.params.service.id, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    submit: responseData.pushNum,
                    build: responseData.pipelineAllNum
                })
            })
    };

    changeType(type, from, to) {
        let startDate, endDate;
        let nowDate = new Date();
        if (from === undefined && to === undefined) {
            let yesterDayDate = nowDate;
            yesterDayDate.setTime(nowDate.getTime() - 24 * 60 * 60 * 1000);
            this.setState({
                from: yesterDayDate.getFullYear() + '-' + (yesterDayDate.getMonth() + 1) + '-' + yesterDayDate.getDate(),
                to: yesterDayDate.getFullYear() + '-' + (yesterDayDate.getMonth() + 1) + '-' + yesterDayDate.getDate(),
            });
            startDate = endDate = yesterDayDate.getFullYear() + '%2F' + (yesterDayDate.getMonth() + 1) + '%2F' + yesterDayDate.getDate()
        } else {
            startDate = from;
            endDate = to;
        }
        if (type === 0) {
            fetch(url + '/provide/v1/push/pushDetailDataByTypeAndService?projectId=' + this.props.screenProps.proId + '&serviceId=' + this.props.navigation.state.params.service.id + '&startDate=' + startDate + '&endDate=' + endDate + '&type=time', {
                headers: {
                    "Authorization": token
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData)
                    this.setState({
                        option: {
                            animation: true,
                            tooltip: {
                                trigger: 'axis',
                                showContent: true,
                                formatter: function (params, ticket, callback) {
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
                            color: ['rgba(77,144,254,1)', 'rgba(0,0,0,0.26)'],
                            series: [
                                {
                                    name: '服务提交次数',
                                    type: 'line',
                                    data: responseData["y-data"]
                                }
                            ]
                        },
                    })
                })
                .catch((err) => {
                    ToastAndroid.show('加载失败,请检查网络', ToastAndroid.SHORT)
                })
        } else if (type === 1) {
            fetch(url + '/provide/v1/pipeline/pipelineDetail?projectId=' + this.props.screenProps.proId + '&serviceId=' + this.props.navigation.state.params.service.id + '&startDate=' + startDate + '&endDate=' + endDate + '&type=time', {
                headers: {
                    "Authorization": token
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        option: {
                            animation: true,
                            tooltip: {
                                trigger: 'axis',
                                showContent: true,
                                formatter: function (params, ticket, callback) {
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
                            color: ['rgba(27,193,35,1)', 'rgba(0,0,0,0.26)'],
                            series: [
                                {
                                    name: '服务构建次数',
                                    type: 'line',
                                    data: responseData["y-data"]
                                }
                            ]
                        },
                    })
                })
                .catch((err) => {
                    ToastAndroid.show('加载失败,请检查网络', ToastAndroid.SHORT)
                })
        }
    }

    changeTime(param) {
        this.setState({
            nowTime: param,
            serverTime: '',
            server1: '',
            server2: '',
        });
        let startDate, endDate;
        let nowDate = new Date();
        if (param === '今天') {
            console.log('今天');
            startDate = endDate = nowDate.getFullYear() + '%2F' + (nowDate.getMonth() + 1) + '%2F' + nowDate.getDate()
            this.setState({
                from: startDate.split('%2F').join('-'),
                to: endDate.split('%2F').join('-'),
            });
        } else if (param === '昨天') {
            let yesterDayDate = nowDate;
            yesterDayDate.setTime(nowDate.getTime() - 24 * 60 * 60 * 1000);
            startDate = endDate = yesterDayDate.getFullYear() + '%2F' + (yesterDayDate.getMonth() + 1) + '%2F' + yesterDayDate.getDate()
            this.setState({
                from: startDate.split('%2F').join('-'),
                to: endDate.split('%2F').join('-'),
            });
        } else if (param === '近7天') {
            endDate = nowDate.getFullYear() + '%2F' + (nowDate.getMonth() + 1) + '%2F' + nowDate.getDate();
            let sevenDaysAgoDate = nowDate;
            sevenDaysAgoDate.setTime(nowDate.getTime() - 24 * 60 * 60 * 1000 * 7);
            startDate = sevenDaysAgoDate.getFullYear() + '%2F' + (sevenDaysAgoDate.getMonth() + 1) + '%2F' + sevenDaysAgoDate.getDate();
            this.setState({
                from: startDate.split('%2F').join('-'),
                to: endDate.split('%2F').join('-'),
            });
        } else {
            endDate = nowDate.getFullYear() + '%2F' + (nowDate.getMonth() + 1) + '%2F' + nowDate.getDate();
            let oneMonthAgoDate = nowDate;
            oneMonthAgoDate.setTime(nowDate.getTime() - 24 * 60 * 60 * 1000 * 30);
            startDate = oneMonthAgoDate.getFullYear() + '%2F' + (oneMonthAgoDate.getMonth() + 1) + '%2F' + oneMonthAgoDate.getDate();
            this.setState({
                from: startDate.split('%2F').join('-'),
                to: endDate.split('%2F').join('-'),
            });
        }
        this.changeType(this.state.type, startDate, endDate);
    }

    handlePressServer(param) {
        console.log(param)
        if (param instanceof Array && param[0] != undefined) {
            this.setState({
                serverTime: param[0].name,
                server1: param[0].value,
            });
        }
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
                                    <Text style={{ color: 'rgba(77,144,254,1)', }}>●  </Text><Text style={styles.fontNormal}>提交次数    {this.state.submit}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'rgba(27,193,35,1)' }}>●  </Text><Text style={styles.fontNormal}>构建次数    {this.state.build}</Text>
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
                <View style={styles.panel}>
                    <TouchableOpacity
                        onPress={() => navigate('Target', { type: this.state.type })}
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
                                text={'今天'}
                                borderLeftWidth={1}
                                onPress={() => this.changeTime('今天')}
                                active={this.state.nowTime === '今天'}
                            />
                            <Tab
                                text={'昨天'}
                                onPress={() => this.changeTime('昨天')}
                                active={this.state.nowTime === '昨天'}
                            />
                            <Tab
                                text={'近7天'}
                                onPress={() => this.changeTime('近7天')}
                                active={this.state.nowTime === '近7天'}
                            />
                            <Tab
                                text={'近30天'}
                                onPress={() => this.changeTime('近30天')}
                                active={this.state.nowTime === '近30天'}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.fontNormal}>时段：{this.state.from}  ——  {this.state.to}</Text>
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
                                        navigate('Calendar', { from: this.state.from, to: this.state.to })
                                    }}
                                />
                            </View>
                        </View>
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
                                <Text style={styles.fontNormal}>数据采集时间</Text>
                            </View>
                            <Text>{this.state.serverTime}</Text>
                        </View>
                        {
                            this.state.type === 0 &&
                            <Line
                                text={PRE_PRO[this.state.type].name.slice(0, 6)}
                                value={this.state.server1.toString()}
                                color={COLOR[this.state.type]}
                            />
                        }
                        {
                            this.state.type === 1 &&
                            <View>
                                <Line
                                    text={PRE_PRO[this.state.type].name.slice(0, 6)}
                                    value={this.state.server1.toString()}
                                    color={COLOR[this.state.type]}
                                />
                                <Line
                                    text={PRE_PRO[this.state.type].name.slice(0, 4) + PRE_PRO[this.state.type].name.slice(-4)}
                                    value={this.state.server2.toString()}
                                />
                            </View>
                        }

                        <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                            <Echarts option={this.state.option} height={250} width={width} appPath={this.props.screenProps.appPath} onPress={(param) => { this.handlePressServer(param) }} />
                        </View>

                    </View>
                </View>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F2',
        flexDirection: 'column',
        paddingTop: 10,
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
    alarm: {
        width: 74,
        alignItems: 'center',
        justifyContent: 'space-between'
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