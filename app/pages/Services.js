import React, { Component } from 'react';
import { View, StyleSheet, ListView, NativeModules, ToastAndroid, RefreshControl } from 'react-native';
import List from '../components/List';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

let url = 'http://gateway.devops.saas.hand-china.com';
let token = 'Bearer b32a0b4a-7238-4df6-b505-3bec2c167085';

export default class Services extends Component {

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
        fetch(url + '/provide/v1/projectOverview/serviceList?projectId=' + this.props.screenProps.proId, {
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
                }
            })
            .catch((err) => {
                ToastAndroid.show('加载失败,请检查网络', ToastAndroid.SHORT)
            })
    }

    renderList(service) {
        return (
            <List
                text={service.serviceName}
                bgColor={'rgba(255,255,255,0.87)'}
                borderBottom={true}
                isSelected={true}
                rightIconName={'ios-arrow-forward'}
                iconColor={'rgba(0,0,0,0.54)'}
                onPress={() => {
                    this.props.navigation.navigate('Service', { service: service })
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