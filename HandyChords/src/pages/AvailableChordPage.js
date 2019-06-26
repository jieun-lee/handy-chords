import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';
import KeyPicker from '../components/KeyPicker';
import ACAccordion from '../components/AvailableChord/ACAccordion';

export default class AvailableChordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: 'C'
        }
    }

    updateKey(key) {
        this.setState({
            currentKey: key
        });
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Available Chords</Text>
                <View>
                    <Text>Key:</Text>
                    <KeyPicker startValue={this.state.currentKey} handlePicker={this.updateKey.bind(this)} />
                </View>
                <ACAccordion currentKey={this.state.currentKey} />
            </View>
        );
    }
}
