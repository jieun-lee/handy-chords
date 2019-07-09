import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../Stylesheet';
import KeyPicker from '../components/KeyPicker';
import CustomPicker from '../components/CustomPicker';

export default class ChordMemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: 'Untitled',
            songKey: 'C',
            songTime: '4/4',
        }
    }

    setSongTitle(title) {
        this.setState({
            songTitle: title
        });
    }

    setSongKey(key) {
        this.setState({
            songKey: key
        });
    }

    setSongTime(time) {
        this.setState({
            songTime: time
        });
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Chord Memo</Text>
                <View style={styles.songPropWrapper}>
                    <Text style={styles.songPropText}>Title: </Text>
                    <TextInput
                        style={styles.songTitlebox}
                        onChangeText={(text) => this.setSongTitle({text})}
                        value={this.state.songTitle}
                    />
                </View>
                <View style={styles.songPropWrapper}>
                    <Text style={styles.songPropText}>Key: </Text>
                    <KeyPicker
                        startValue={this.state.songKey}
                        handlePicker={this.setSongKey.bind(this)} />
                </View>
                <View style={styles.songPropWrapper}>
                    <Text style={styles.songPropText}>Time Signature: </Text>
                    <CustomPicker
                        startValue={this.state.songTime}
                        handlePicker={this.setSongTime.bind(this)}
                        pickerVals={['3/4', '4/4', '6/8']} />
                </View>
                
            </View>
        );
    }
}
