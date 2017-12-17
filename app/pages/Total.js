import React, { Component, } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../components/List';
import Button from '../components/Button';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { NativeModules } from 'react-native';

const PRE_PRO = [
    { id: 0, name: '服务提交次数/失败次数' },
    { id: 1, name: '服务构建次数/失败次数' },
    { id: 2, name: '服务部署次数/失败次数' },
    { id: 3, name: '服务发布次数/失败次数' },
];
const { width, height } = Dimensions.get('window');
export default class Total extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `选择指标`,
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
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
        };
    }

    componentDidMount() {
        this.getMessage();
    }

    getMessage() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(PRE_PRO)
        })
    }

    select(list) {

        this.props.navigation.dispatch({
            key: 'FirstPage',
            type: 'BcakToLatestScreenBeforeAndReload',
            routeName: 'FirstPage',
            params: {
                type: list.id
            }
        });
        this.props.navigation.navigate('FirstPage', { type: list.id });

    }

    renderList(list) {
        return (
            <List
                text={list.name}
                bgColor={'rgba(255,255,255,0.87)'}
                borderBottom={true}
                isSelected={list.id == this.props.navigation.state.params.type ? true : false}
                rightIconName={'md-checkmark'}
                iconColor={'#3F51B5'}
                onPress={() => {
                    this.select(list)
                }}
            />
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ height: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' }}></View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderList.bind(this)}
                />
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
    headBlock: {
        width: width,
        height: 137,
        backgroundColor: '#3F51B5'
    },
    userName: {
        flex: 1,
        height: height * 0.2,
        paddingTop: 40,
        paddingLeft: 20
    },
    userImage: {
        width: 65,
        height: 65,
        alignSelf: 'center',
        marginRight: 30
    },
    imageStyle: {
        width: 65,
        height: 65
    }
});