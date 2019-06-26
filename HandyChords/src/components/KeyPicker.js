import React, {Component} from 'react';
import {Picker} from 'react-native';
import styles from '../Stylesheet';

export default class KeyPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: this.props.startValue
        }
    }

    render() {
        return (
            <Picker
                selectedValue={this.state.selectedKey}
                style={styles.keyPicker}
                onValueChange={(itemValue) => {
                    this.setState({selectedKey: itemValue});
                    this.props.handlePicker(itemValue);
                }}
            >
                <Picker.Item label='C' value='C' />
                <Picker.Item label='C#' value='C#' />
                <Picker.Item label='Db' value='Db' />
                <Picker.Item label='D' value='D' />
                <Picker.Item label='D#' value='D#' />
                <Picker.Item label='Eb' value='Eb' />
                <Picker.Item label='E' value='E' />
                <Picker.Item label='F' value='F' />
                <Picker.Item label='F#' value='F#' />
                <Picker.Item label='Gb' value='Gb' />
                <Picker.Item label='G' value='G' />
                <Picker.Item label='G#' value='G#' />
                <Picker.Item label='Ab' value='Ab' />
                <Picker.Item label='A' value='A' />
                <Picker.Item label='A#' value='A#' />
                <Picker.Item label='Bb' value='Bb' />
                <Picker.Item label='B' value='B' />
            </Picker>
        );
    }
}
