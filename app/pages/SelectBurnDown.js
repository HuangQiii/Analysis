import React, { Component, } from 'react';
import { View, StyleSheet, ListView, NativeModules, DeviceEventEmitter, RefreshControl } from 'react-native';
import List from '../components/List';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

let url = '';
let token = '';

export default class SelectBurnDown extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `燃尽图：选择冲刺`,
        headerRight: (
            <Icon.Button
                backgroundColor="transparent"
            />
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(url + '/provide/v1/kanban/getCurrentSprints?projectId=' + this.props.screenProps.proId, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.error === undefined) {
                    this.setState({
                        refreshing: false,
                        dataSource: this.state.dataSource.cloneWithRows(responseData)
                    })
                } else {
                    this.setState({
                        refreshing: false,
                        dataSource: this.state.dataSource.cloneWithRows([])
                    })
                }

            })
    }

    select(sprint) {
        DeviceEventEmitter.emit('chooseBurnDown', sprint);
        this.props.navigation.dispatch({
            key: 'Home',
            type: 'BcakToCurrentScreen',
            routeName: 'Home',
        });
    }

    renderList(sprint) {
        return (
            <List
                text={sprint.name}
                bgColor={'rgba(255,255,255,0.87)'}
                borderBottom={true}
                isSelected={sprint.id === this.props.navigation.state.params.sprint.id ? true : false}
                rightIconName={'md-checkmark'}
                iconColor={'#3F51B5'}
                onPress={() => {
                    this.select(sprint)
                }}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' }}></View>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                this.getData()
                            }}
                        />
                    }
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