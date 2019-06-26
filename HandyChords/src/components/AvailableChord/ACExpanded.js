import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../../Stylesheet';

export default class ACExpanded extends Component {
    render() {
        return (
            <View style={styles.acExpanded}>
                <Text>Expanded {this.props.label}, {this.props.currentKey}</Text>
            </View>
        );
    }
}
