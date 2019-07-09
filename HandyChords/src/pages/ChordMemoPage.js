import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../Stylesheet';
import SongProps from '../components/SongProps';

export default class ChordMemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: 'Untitled',
            songKey: 'C',
            songTime: '4/4',
        }
    }

    handlePropChange(type, oldVal, newVal) {
        // key vs time
        // old value
        // new value
        // give them dialog box, then what they want to do
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Chord Memo</Text>
                <SongProps onChange={this.handlePropChange.bind(this)} />                
            </View>
        );
    }
}
