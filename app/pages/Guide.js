import React, { Component, } from 'react';
import { View } from 'react-native';

export default class Guide extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.judge();
    }

    judge() {
        if (this.props.projectId === '') {
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