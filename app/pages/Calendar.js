import React, { Component, } from 'react';
import { View, StyleSheet, ListView, NativeModules, DeviceEventEmitter, TextInput } from 'react-native';
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
            now:'from'
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={'起始时间'}
                    value={this.state.from}
                />
                <TextInput
                    placeholder={'结束时间'}
                    value={this.state.to}
                />
                <Calendar
                    markedDates={{
                        '2017-12-11': { selected: true },
                        '2017-12-26': { marked: true },
                    }}
                    // Initially visible month. Default = Date()
                    //current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    //minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2017-12-26'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {
                        if(this.state.now != 'from'){
                            this.setState({
                                to:day.dataString
                            });
                        }else{
                            this.setState({
                            from:day.dateString
                        })
                        }
                        
                    }
                    }   
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    //onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    //hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    //renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                //disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                //firstDay={1}
                // Hide day names. Default = false
                //hideDayNames={true}
                // Show week numbers to the left. Default = false
                //showWeekNumbers={true}
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
});