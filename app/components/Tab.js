import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const propTypes = {
    activeOpacity: PropTypes.number,
    onPress: PropTypes.func,
    height: PropTypes.number,
    borderLeftWidth: PropTypes.number,
    text: PropTypes.string,
    borderBottomWidth: PropTypes.number,
    borderBottomColor: PropTypes.string,
    active: PropTypes.bool,
};

const Tab = ({
    activeOpacity, onPress, height, borderLeftWidth, text, borderBottomWidth, borderBottomColor, active
}) => (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <View style={[styles.tab, { height: height, borderLeftWidth: borderLeftWidth, borderBottomWidth: borderBottomWidth, borderBottomColor }, active ? styles.tabActive : {}]}>
                <Text style={[{ paddingLeft: 12, paddingRight: 12, color: 'rgba(0,0,0,0.54)' }, active ? { marginTop: 1, color: 'rgba(0,0,0,0.9)' } : {}]}>{text}</Text>
            </View>
        </TouchableOpacity >
    );

Tab.propTypes = propTypes;

Tab.defaultProps = {
    onPress() { },
    activeOpacity: 0.2,
    height: 30,
    borderLeftWidth: 0,
    active: false
};

var styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(211,211,211,1)',
    },
    tabActive: {
        borderBottomColor: '#3F51B5',
        borderBottomWidth: 2,
    }
});

export default Tab;