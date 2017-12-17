import React, { Component, } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight } from 'react-native';
import { NativeModules } from 'react-native';
import List from '../components/List';
import Icon from 'react-native-vector-icons/Ionicons';
import Echarts from 'native-echarts';
var option1 = {
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
            data: ['12/09', '12/10', '12/11', '12/12', '12/13', '12/14', '12/15']
        }
    ],
    yAxis: [
        {
            type: 'value',
        }
    ],
    color: ['#1BC123', 'rgba(0,0,0,0.26)'],
    series: [
        {
            name: '项目投入人员',
            type: 'line',
            data: [280, 360, 320, 510, 370, 430, 300, 355],
            // smooth: true,
            // symbol: 'none'
        },
        {
            name: '期望值',
            type: 'line',
            data: [80, 250, 290, 410, 250, 290, 200, 320],
            // symbol: 'none'
        },
    ]
};
var option = {
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
            boundaryGap: true,
            type: 'category',
            data: ['12/09', '12/10', '12/11', '12/12', '12/13', '12/14', '12/15']
        }
    ],
    yAxis: [
        {
            type: 'value',
        }
    ],
    color: ['rgba(77,144,254,0.8)'],
    series: [
        {
            name: '构建数',
            type: 'bar',
            data: [500, 440, 380, 320, 300, 250, 250, 80],
            // smooth: true,
            // symbol: 'none'
        },
    ]
};
const { width, height } = Dimensions.get('window');
export default class FirstPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `运营组织`,
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
            memberTime: '',
            member1: '',
            member2: '',
            number: '',
            chart: option,
            chart1: option1,
        };
    }

    handlePressMember(param) {
        if (param instanceof Array) {
            console.log(param)
            this.setState({
                memberTime: param[0].name,
                member1: param[0].value,
                member2: param[1].value,
            });
        }
    }

    handlePressNumber(param) {
        if (param instanceof Array) {
            console.log(param)
            this.setState({
                number: param.data
            });
        }
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.panel,]}>
                        <View style={{ height: 38, }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>组织监控信息</Text>
                        </View>
                        <View style={[styles.serviceMonitoringData]}>
                            <View style={styles.count}>
                                <View style={styles.countColumn}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>部署频率</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>29</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>/天</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>变更时长</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>29</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>/小时</Text>
                                    </View>

                                </View>
                                <View style={styles.countColumn}>
                                    <View style={{ flexDirection: 'row', marginTop: 1 }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>变更完成率</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>29</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>%</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={[styles.fontNormal, { marginTop: 1 }]}>问题平均处理时长</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>8</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>/小时</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.panel,]}>
                        <View style={{ height: 38, }}>
                            <Text style={[styles.fontNormal, { marginTop: -4 }]}>项目及人员信息</Text>
                        </View>
                        <View style={[styles.serviceMonitoringData]}>
                            <View style={styles.count}>
                                <View style={[styles.countColumn, { flexDirection: 'row' }]}>
                                    <View style={{ width: 66, height: 66, borderRadius: 33, borderWidth: 2, borderColor: '#3F51B5', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={[styles.fontNormal, { fontSize: 10 }]}>总人数</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.fontNormal, { fontSize: 18 }]}>36</Text>
                                            <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 8 }]}>人</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: 66, height: 66, borderRadius: 33, borderWidth: 2, borderColor: '#3F51B5', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                                        <Text style={[styles.fontNormal, { fontSize: 10 }]}>总项目</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.fontNormal, { fontSize: 18 }]}>29</Text>
                                            <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 8 }]}>个</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.countColumn}>
                                    <View style={{ flexDirection: 'row', marginTop: 1 }}>
                                        <Text style={[styles.fontNormal, { fontSize: 14, marginTop: 1 }]}>异常项目</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 14, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>0</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>个</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                        <Text style={[styles.fontNormal, { fontSize: 14, marginTop: 1 }]}>我负责的项目</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 14, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>12</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>个</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                        <Text style={[styles.fontNormal, { fontSize: 14, marginTop: 1 }]}>我负责的异常项目</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 14, marginLeft: 8, marginRight: 8, fontWeight: '500', color: '#3F51B5' }]}>0</Text>
                                        <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>个</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.panel,]}>
                        <View style={{ height: 38, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={styles.fontNormal}>人员投入趋势</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(211,211,211,1)', borderBottomWidth: 3, borderBottomColor: '#3F51B5' }}>
                                    <Text style={{ paddingLeft: 12, paddingRight: 12, color: 'rgba(0,0,0,0.9)' }}>近7天</Text>
                                </View>
                                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(211,211,211,1)', borderLeftWidth: 0 }}>
                                    <Text style={{ paddingLeft: 12, paddingRight: 12, }}>近30天</Text>
                                </View>
                                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(211,211,211,1)', borderLeftWidth: 0 }}>
                                    <Text style={{ paddingLeft: 12, paddingRight: 12, }}>全年</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Icon
                                    name="md-calendar"
                                    color="rgba(0,0,0,0.54)"
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
                                    <Text style={styles.fontNormal}>数据采集时间</Text>
                                </View>
                                <Text>{this.state.memberTime}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#1BC123', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>项目投入人员</Text>
                                </View>
                                <Text>{this.state.member1}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: 'rgba(0,0,0,0.26)', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>项目开发人员</Text>
                                </View>
                                <Text>{this.state.member2}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.chart1} height={250} width={width} onPress={(param) => { this.handlePressMember(param) }} />
                            </View>

                        </View>
                    </View>
                    <View style={[styles.panel, { marginBottom: 10 }]}>
                        <View style={{ height: 38, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={styles.fontNormal}>Top10构建数项目</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(211,211,211,1)', borderBottomWidth: 3, borderBottomColor: '#3F51B5' }}>
                                    <Text style={{ paddingLeft: 12, paddingRight: 12, color: 'rgba(0,0,0,0.9)' }}>近7天</Text>
                                </View>
                                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(211,211,211,1)', borderLeftWidth: 0 }}>
                                    <Text style={{ paddingLeft: 12, paddingRight: 12, }}>近30天</Text>
                                </View>
                                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(211,211,211,1)', borderLeftWidth: 0 }}>
                                    <Text style={{ paddingLeft: 12, paddingRight: 12, }}>全年</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Icon
                                    name="md-calendar"
                                    color="rgba(0,0,0,0.54)"
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
                            <Text style={[styles.fontNormal, { color: 'rgba(0,0,0,0.54)', marginTop: 10 }]}>时段： 2017/12/09 - 2017/12/15</Text>
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
                                    <Text style={styles.fontNormal}>项目</Text>
                                </View>
                                <Text>D项目</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                                <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                                    <Text style={{ color: '#3A76D8', fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.fontNormal}>构建数</Text>
                                </View>
                                <Text>{this.state.number}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', height: 220, marginTop: -30, marginLeft: -12, }}>
                                <Echarts option={this.state.chart} height={250} width={width} onPress={(param) => { this.handlePressNumber(param) }} />
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