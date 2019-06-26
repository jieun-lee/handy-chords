import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';

export default class ChordNotesPage extends Component {
    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Chord Notes</Text>
            </View>
        );
    }
}
