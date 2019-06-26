import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';
import KeyPicker from '../components/KeyPicker';
import TransposeChart from '../components/TransposeChart';

export default class QuickTransposePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalKey: 'C',
            newKey: 'D',
        }
    }

    updateOriginalKey(keyValue) {
        this.setState({
            originalKey: keyValue
        });
    }

    updateNewKey(keyValue) {
        this.setState({
            newKey: keyValue
        });
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Quick Transpose</Text>
                <View style={styles.keyPickerWrapper}>
                    <View>
                        <Text>Original Key:</Text>
                        <KeyPicker startValue={this.state.originalKey} handlePicker={this.updateOriginalKey.bind(this)} />
                    </View>
                    <View>
                        <Text>New Key:</Text>
                        <KeyPicker startValue={this.state.newKey} handlePicker={this.updateNewKey.bind(this)} />
                    </View>
                </View>
                <TransposeChart originalKey={this.state.originalKey} newKey={this.state.newKey} />  
            </View>
        );
    }
}
