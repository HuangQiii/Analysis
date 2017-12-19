import React, { Component, } from 'react';
import { View, StyleSheet, ListView, NativeModules } from 'react-native';
import List from '../components/List';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const PRE_PRO = [
    { id: 0, name: '服务提交次数/失败次数' },
    { id: 1, name: '服务构建次数/失败次数' },
    { id: 2, name: '服务部署次数/失败次数' },
    { id: 3, name: '服务发布次数/失败次数' },
];
export default class Target extends Component {

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
        this.getData();
    }

    getData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(PRE_PRO)
        })
    }

    select(list) {
        this.props.navigation.dispatch({
            key: 'Service',
            type: 'BcakToLatestScreenBeforeAndReload',
            routeName: 'Service',
            params: {
                type: list.id
            }
        });
        this.props.navigation.navigate('Service', { type: list.id });

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