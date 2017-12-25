import React, { Component, } from 'react';
import { View, StyleSheet, ListView, NativeModules, DeviceEventEmitter } from 'react-native';
import List from '../components/List';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

let url = 'http://gateway.devops.saas.hand-china.com';
let token = 'Bearer 877dcc6b-bddf-4405-a5d7-04e8a4a7c534';

export default class SelectAccumulativeFlowGraph extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `累计流图：选择冲刺`,
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
        this.getData();
    }

    getData() {
        fetch(url + '/provide/v1/kanban/getCuttentSprints?projectId=' + this.props.screenProps.proId, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
                })
            })
    }

    select(list) {
        DeviceEventEmitter.emit('chooseAccumulativeFlowGraph', list);
        this.props.navigation.dispatch({
            key: 'Home',
            type: 'BcakToCurrentScreen',
            routeName: 'Home',
        });
    }

    renderList(list) {
        return (
            <List
                text={list.name}
                bgColor={'rgba(255,255,255,0.87)'}
                borderBottom={true}
                rightIconName={'md-checkmark'}
                iconColor={'#3F51B5'}
                onPress={() => {
                    this.select(list)
                }}
            />
        );
    }

    render() {
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
        backgroundColor: '#F1F1F2',
        flexDirection: 'column'
    },
});