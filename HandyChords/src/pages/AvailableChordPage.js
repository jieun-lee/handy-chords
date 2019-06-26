import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';

export default class AvailableChordPage extends Component {
    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text>Available Chords</Text>
            </View>
        );
    }
}
