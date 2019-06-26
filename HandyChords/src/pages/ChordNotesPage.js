import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';

export default class ChordNotesPage extends Component {
    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text>Chord Notes</Text>
            </View>
        );
    }
}
