import React, { Component, } from 'react';
import { View, StyleSheet, ListView, NativeModules, DeviceEventEmitter, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


export default class SelectCalendar extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `选择日期`,
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
            from: '',
            to: '',
            nowDate: '',
            now: 'from',
            selected: '',
            markedDates: {},
            min: '',
            max: '',
        };
    }

    componentDidMount() {
        this.init();
    }

    init() {
        if (this.props.navigation.state.params && this.props.navigation.state.params.from && this.props.navigation.state.params.to) {
            this.setState({
                from: this.props.navigation.state.params.from,
                to: this.props.navigation.state.params.to,
            });
        }
        let nowDate = new Date();
        let nowDateStr = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
        this.setState({
            nowDate: nowDateStr,
            maxDate: nowDate
        });
    }

    postTimes() {
        DeviceEventEmitter.emit('chooseTime', this.state.from, this.state.to);
        this.props.navigation.dispatch({
            key: 'Service',
            type: 'BcakToCurrentScreen',
            routeName: 'Service',
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50 }}>
                        <TouchableOpacity
                            onPress={() => this.setState({ now: 'from' })}
                        >
                            <View style={[styles.box, this.state.now === 'from' ? { borderColor: 'gray' } : { borderColor: 'transparent' }]}>
                                <Text>From:  {this.state.from}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ now: 'to' })}
                        >
                            <View style={[styles.box, this.state.now === 'to' ? { borderColor: 'gray' } : { borderColor: 'transparent' }]}>
                                <Text>To:  {this.state.to}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <TouchableOpacity
                            onPress={() => this.postTimes()}
                        >
                            <View style={{ paddingTop: 2, paddingBottom: 2, paddingLeft: 10, paddingRight: 10, backgroundColor: 'grey' }}>
                                <Text style={{ color: 'white', fontSize: 14 }}>确定</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Calendar
                    markedDates={{
                        [this.state.from]: { selected: true },
                        [this.state.to]: { selected: true }
                    }}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    onDayPress={(day) => {
                        if (this.state.from === '') {
                            this.setState({
                                from: day.dateString,
                                now: 'to'
                            });
                        } else if (this.state.from != '' && this.state.to === '') {
                            if (this.state.from < day.dateString) {
                                this.setState({
                                    to: day.dateString
                                })
                            } else {
                                let to = this.state.from
                                this.setState({
                                    from: day.dateString,
                                    to: to
                                })
                            }

                        } else {
                            if (this.state.now === 'from') {
                                let from = this.state.from;
                                let to = this.state.to;
                                if (day.dateString <= to) {
                                    this.setState({
                                        from: day.dateString
                                    });
                                } else {
                                    this.setState({
                                        to: day.dateString,
                                        from: to
                                    });
                                }

                            } else {
                                let from = this.state.from;
                                let to = this.state.to;
                                if (day.dateString >= from) {
                                    this.setState({
                                        to: day.dateString
                                    })
                                } else {
                                    this.setState({
                                        from: day.dateString,
                                        to: from
                                    });
                                }

                            }
                        }
                    }
                    }
                    monthFormat={'yyyy MM'}
                    hideExtraDays={true}
                />
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F2',
        flexDirection: 'column'
    },
    box: {
        // height: 40
        borderWidth: 1,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
});