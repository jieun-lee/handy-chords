import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';

export default class ChordMemoPage extends Component {
    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Chord Memo</Text>
            </View>
        );
    }
}
