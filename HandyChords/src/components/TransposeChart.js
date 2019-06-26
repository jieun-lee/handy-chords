import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getKeySet} from '../Util';
import styles from '../Stylesheet';

export default class TransposeChart extends Component {
    render() {
        const originalKeyArray = getKeySet(this.props.originalKey);
        const newKeyArray = getKeySet(this.props.newKey);
        return (
            <View>
                <Text style={styles.tchartMainChord}>{originalKeyArray[0]} -> {newKeyArray[0]}</Text>
                <Text style={styles.tchartSubChord}>{originalKeyArray[1]} -> {newKeyArray[1]}</Text>
                <Text style={styles.tchartMainChord}>{originalKeyArray[2]} -> {newKeyArray[2]}</Text>
                <Text style={styles.tchartSubChord}>{originalKeyArray[3]} -> {newKeyArray[3]}</Text>
                <Text style={styles.tchartMainChord}>{originalKeyArray[4]} -> {newKeyArray[4]}</Text>
                <Text style={styles.tchartMainChord}>{originalKeyArray[5]} -> {newKeyArray[5]}</Text>
                <Text style={styles.tchartSubChord}>{originalKeyArray[6]} -> {newKeyArray[6]}</Text>
                <Text style={styles.tchartMainChord}>{originalKeyArray[7]} -> {newKeyArray[7]}</Text>
                <Text style={styles.tchartSubChord}>{originalKeyArray[8]} -> {newKeyArray[8]}</Text>
                <Text style={styles.tchartMainChord}>{originalKeyArray[9]} -> {newKeyArray[9]}</Text>
                <Text style={styles.tchartSubChord}>{originalKeyArray[10]} -> {newKeyArray[10]}</Text>
                <Text style={styles.tchartMainChord}>{originalKeyArray[11]} -> {newKeyArray[11]}</Text>
            </View>
        );
    }
}
