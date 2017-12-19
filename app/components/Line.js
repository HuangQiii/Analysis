import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
};

const Line = ({
    text, value, color
}) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
            <View style={{ paddingRight: 9, justifyContent: 'center' }}>
                <Text style={{ color: color, fontSize: 16, marginLeft: -2, marginTop: -1 }}>●</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.fontNormal}>{text}</Text>
            </View>
            <Text>{value}</Text>
        </View>
    );

Line.propTypes = propTypes;

Line.defaultProps = {
    text: '',
    value: '',
    color: 'rgba(0,0,0,0.26)',
};

var styles = StyleSheet.create({
    fontNormal: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 14,
    },
});

export default Line;