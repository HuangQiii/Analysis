import React, { Component, } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Guide extends Component {

    constructor(props) {
        super(props);
        console.log('guide props: ', this.props.screenProps);
    }

    componentWillMount() {
        this.judge()
    }

    judge() {
        if (this.props.screenProps.proId === '') {
            // if (true) {
            this.props.navigation.dispatch({
                key: 'Organization',
                type: 'ReplaceCurrentScreen',
                routeName: 'Organization',
                params: {
                }
            });
        } else {
            this.props.navigation.dispatch({
                key: 'Home',
                type: 'ReplaceCurrentScreenToTab',
                routeName: 'Home',
                params: {
                }
            });
        }
    }

    render() {
        return (
            <View></View>
        );
    }
}