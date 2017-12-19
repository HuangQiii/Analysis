import React, { Component, } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Guide extends Component {

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
        console.log('guide props: ', this.props.screenProps.proId);
    }

    componentDidMount() {
        this.judge();
    }

    judge() {
        if (this.props.screenProps.proId === '') {
            // if (true) {
            this.props.navigation.navigate('Organization')
        } else {
            this.props.navigation.navigate('Overview')
        }
    }

    render() {
        return (
            <View></View>
        );
    }
}