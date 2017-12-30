import React, { Component } from 'react';
import { View, StyleSheet, ListView, NativeModules, ToastAndroid, RefreshControl } from 'react-native';
import List from '../components/List';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

let url = 'http://gateway.devops.saas.hand-china.com';
let token = 'Bearer 2436de68-679d-4304-b709-4d0622d4b700';
export default class Member extends Component {

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
        headerTitle: '开发项目',
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
        fetch(url + '/provide/v1/projectOverview/userList?projectId=' + this.props.screenProps.proId, {
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

    renderList(member) {
        return (
            <List
                text={member.name + "  (" + member.user_email + ")"}
                bgColor={'rgba(255,255,255,0.87)'}
                positional={member.member_name}
                listHeight={56}
                borderBottom={true}
                onPress={() => {
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