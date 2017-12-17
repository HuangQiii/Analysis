import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ViewPropTypes, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const propTypes = {
    leftIconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    text: PropTypes.string,
    textSize: PropTypes.number,
    textColor: PropTypes.string,
    rightIconName: PropTypes.string,
    isSelected: PropTypes.bool,
    listHeight: PropTypes.number,
    overlayMarginTop: PropTypes.number,
    bgColor: PropTypes.string,
    hightLight: PropTypes.bool,
    borderBottom: PropTypes.bool,
    activeOpacity: PropTypes.number,
    underlayColor: PropTypes.string,
    onPress: PropTypes.func,
    positional: PropTypes.string,
};

const List = ({
  leftIconName, iconSize, iconColor, text, textSize, textColor, rightIconName, isSelected, listHeight, overlayMarginTop, bgColor, hightLight, borderBottom, activeOpacity, underlayColor, onPress, positional
}) => (
        <TouchableHighlight
            underlayColor={underlayColor}
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <View
                style={[
                    style.list,
                    borderBottom
                        ? { borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' }
                        : {}
                    , { marginTop: overlayMarginTop, height: listHeight, backgroundColor: bgColor }
                ]}>
                {
                    leftIconName != '' &&
                    <View style={style.listIcon}>
                        <Icon name={leftIconName} size={iconSize} color={iconColor} />
                    </View>
                }

                <View style={style.listContent}>
                    <View>
                        <Text style={{ fontSize: textSize, color: textColor }}>{text}</Text>
                        {
                            positional != '' &&
                            <Text style={{ fontSize: textSize - 4, color: 'rgba(0,0,0,0.65)' }}>{positional}</Text>
                        }
                    </View>
                    <View style={{ alignItems: 'center', width: 23, flexDirection: 'row' }}>
                        {
                            rightIconName != '' && isSelected &&
                            < Icon name={rightIconName} size={iconSize} color={iconColor} />
                        }
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );

List.propTypes = propTypes;

List.defaultProps = {
    iconSize: 14,
    iconColor: 'rgba(0,0,0,0.65)',
    textSize: 14,
    textColor: 'rgba(0,0,0,0.9)',
    leftIconName: '',
    rightIconName: '',
    isSelected: false,
    listHeight: 38,
    overlayMarginTop: 0,
    hightLight: false,
    borderBottom: false,
    activeOpacity: 0.65,
    underlayColor: '#F3F3F3',
    onPress() { },
    positional: ''
};

var style = StyleSheet.create({
    list: {
        paddingLeft: 17,
        flexDirection: 'row',
    },
    listIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },
    listContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default List;