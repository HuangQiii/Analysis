import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const propTypes = {
    text: PropTypes.string,
    number: PropTypes.number,
    unit: PropTypes.string,
    marginTop: PropTypes.number,
};

const Label = ({
    text, number, unit, marginTop
}) => (
        <View style={{ flexDirection: 'row', marginTop: marginTop }}>
            <Text style={[styles.fontNormal, { marginTop: 1 }]}>{text}</Text>
            <Text style={[styles.fontNormal, { fontSize: 24, marginTop: -8, marginLeft: 6, marginRight: 6, fontWeight: '500', color: '#3F51B5' }]}>{number}</Text>
            <Text style={[styles.fontNormal, { fontSize: 10, color: 'rgba(0,0,0,0.43)', marginTop: 5 }]}>{unit}</Text>
        </View>
    );

Label.propTypes = propTypes;

Label.defaultProps = {
    text: '',
    number: '',
    unit: '',
    marginTop: 1
};

var styles = StyleSheet.create({
    fontNormal: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 14,
    },
});

export default Label;