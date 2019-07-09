import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native';
import styles, {colors} from '../../Stylesheet';

export default class SongMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }

    measureClicked() {
        Alert.alert('Row: ' + this.props.rowNo + ', Measure: ' + this.props.barNo);
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.measureClicked()}
                underlayColor={colors.lightShade}
                style={styles.songMeasure}
            >
                <Text>Hi</Text>
            </TouchableHighlight>
        );
    }
}
