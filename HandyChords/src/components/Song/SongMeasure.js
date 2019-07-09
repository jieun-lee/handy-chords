import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native';
import styles, {colors} from '../../Stylesheet';

export default class SongMeasure extends Component {
    measureClicked() {
        Alert.alert('Row: ' + this.props.rowNo + ', Measure: ' + this.props.barNo);
    }

    renderChords() {
        let renderedChords = [];
        for (var i = 0; i < this.props.barChords.length; i++) {
            renderedChords.push(
                <View key={i} style={styles.songMeasureChord}>
                    <Text style={styles.songMeasureChordText}>{this.props.barChords[i]}</Text>
                </View>
            );
        }
        return renderedChords;
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.measureClicked()}
                underlayColor={colors.lightShade}
                style={styles.songMeasure}
            >
                <View style={styles.songMeasureChordsWrapper}>
                    {this.renderChords()}
                </View>
            </TouchableHighlight>
        );
    }
}
