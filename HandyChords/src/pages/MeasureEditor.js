import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles, {colors} from '../Stylesheet';
import SongProps from '../components/Song/SongProps';
import SongRow from '../components/Song/SongRow';

export default class MeasureEditor extends Component {
    render() {
        return (
            <View style={styles.measureEditor}>
                <View style={styles.measureEditorPage}>
                    <Text>Hello World</Text>
                </View>
            </View>
        );
    }
}
