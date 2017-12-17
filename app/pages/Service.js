import React, { Component, } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../components/List';
import Button from '../components/Button';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { NativeModules } from 'react-native';

const PRE_PRO = ['数据持久化'];
const { width, height } = Dimensions.get('window');
export default class Total extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `服务`,
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

    renderList(list) {
        return (
            <List
                text={list}
                bgColor={'rgba(255,255,255,0.87)'}
                borderBottom={true}
                isSelected={true}
                rightIconName={'ios-arrow-forward'}
                iconColor={'rgba(0,0,0,0.54)'}
                onPress={() => {
                    this.props.navigation.navigate('FirstPage')
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