import React, { Component, } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, NativeModules, DeviceEventEmitter } from 'react-native';
import List from '../components/List';
import Echarts from 'native-echarts';
import Tab from '../components/Tab';
import Line from '../components/Line';
import PRETEND_CHART_DATA from '../constants/PretendData';
import Icon from 'react-native-vector-icons/Ionicons';

let url = 'http://gateway.devops.saas.hand-china.com';
let token = 'Bearer 15c3e72a-71ce-4aa6-80ae-8fbaba30022c';

const PRE_PRO = [
    { id: 0, name: '服务提交次数/失败次数', color: 'rgba(77,144,254,1)' },
    { id: 1, name: '服务构建次数/失败次数', color: 'rgba(27,193,35,1)' },
    // { id: 2, name: '服务部署次数/失败次数', color: 'rgba(255,153,21,1)' },
    // { id: 3, name: '服务发布次数/失败次数', color: 'rgba(249,83,186,1)' },
];
const COLOR = ['rgba(77,144,254,1)', 'rgba(27,193,35,1)', 'rgba(255,153,21,1)', 'rgba(249,83,186,1)'];
const ARRAY_DATE = ['1小时', '6小时', '一天', '七天'];

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
            nowTime: '1小时',

            submit: '',
            build: '',
            deploy: '',
            release: '',
        };
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('chooseType', (type) => {
            this.setState({
                type: type,
            });
            this.changeType(type);
        });
    }

    componentDidMount() {
        this.changeType();
        this.getData();
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('chooseType');
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

    changeType(type) {
        // (this.props.navigation.state.params && this.props.navigation.state.params.type) 
        if (type === undefined) {
            this.setState({
                option: PRETEND_CHART_DATA[this.state.type][0]
            });
        } else {
            this.setState({
                option: PRETEND_CHART_DATA[type][0]
            })
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
        if (param instanceof Array) {
            this.setState({
                serverTime: param[0].name,
                server1: param[0].value,
                server2: param[1].value,
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
                                onPress={() => this.changeTime('一天')}
                                active={this.state.nowTime === '一天'}
                            />
                            <Tab
                                text={'7天'}
                                onPress={() => this.changeTime('七天')}
                                active={this.state.nowTime === '七天'}
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
                                <Text style={styles.fontNormal}>数据采集时间</Text>
                            </View>
                            <Text>{this.state.serverTime}</Text>
                        </View>
                        <Line
                            text={PRE_PRO[this.state.type].name.slice(0, 6)}
                            value={this.state.server1.toString()}
                            color={COLOR[this.state.type]}
                        />
                        <Line
                            text={PRE_PRO[this.state.type].name.slice(0, 4) + PRE_PRO[this.state.type].name.slice(-4)}
                            value={this.state.server2.toString()}
                        />
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