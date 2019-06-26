import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../Stylesheet';
import { getErrorMessage, getKeySet } from '../../Util';

export default class ACExpanded extends Component {
    constructor(props) {
        super(props);
        this.keySet = getKeySet(this.props.currentKey);
    }
    renderDiatonic() {
        return (
            <View style={styles.acExpanded}>
                <Text style={styles.acMainChord}>{this.keySet[0]}M7{'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[0]}M7(9), {this.keySet[0]}M7(6), {this.keySet[0]}M7(#11)</Text>
                </Text>
                <Text style={styles.acMainChord}>{this.keySet[2]}m7{'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[2]}m7(9), {this.keySet[2]}m7(11), {this.keySet[2]}m7(13)</Text>
                </Text>
                <Text style={styles.acMainChord}>{this.keySet[4]}m7{'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[4]}m7(9), {this.keySet[4]}m7(11), {this.keySet[4]}m7(13)</Text>
                </Text>
                <Text style={styles.acMainChord}>{this.keySet[5]}M7{'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[5]}M7(9), {this.keySet[5]}M7(6), {this.keySet[5]}M7(#11)</Text>
                </Text>
                <Text style={styles.acMainChord}>{this.keySet[7]}7{'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[7]}7(9), {this.keySet[7]}7(13), {this.keySet[7]}7(b9), {this.keySet[7]}7(b13),
                    {this.keySet[7]}7(#11), {this.keySet[7]}7(#9)</Text>
                </Text>
                <Text style={styles.acMainChord}>{this.keySet[9]}m7{'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[9]}m7(9), {this.keySet[9]}m7(11), {this.keySet[9]}m7(13)</Text>
                </Text>
                <Text style={styles.acMainChord}>{this.keySet[11]}m7(b5){'\n'}
                    <Text style={styles.acSubChord}>{this.keySet[11]}m7(b5,9), {this.keySet[11]}m7(b5,11), {this.keySet[11]}m7(b5,b9), {this.keySet[11]}m7(b5,13)</Text>
                </Text>
            </View>
        );
    }

    renderSecondary() {
        return (
            <View style={styles.acExpanded}>
                <Text style={styles.acMainChord}>{this.keySet[7]}m7 - {this.keySet[0]}7 - {this.keySet[5]}M7</Text>
                <Text style={styles.acMainChord}>{this.keySet[9]}m7 - {this.keySet[2]}7 - {this.keySet[7]}M7</Text>
                <Text style={styles.acMainChord}>{this.keySet[11]}m7(b5) - {this.keySet[4]}7 - {this.keySet[9]}m7</Text>
                <Text style={styles.acMainChord}>{this.keySet[4]}m7(b5) - {this.keySet[9]}7 - {this.keySet[2]}m7</Text>
                <Text style={styles.acMainChord}>{this.keySet[6]}m7(b5) - {this.keySet[11]}7 - {this.keySet[4]}m7</Text>
            </View>
        );
    }

    renderModal() {
        return (
            <View style={styles.acExpanded}>
                <Text style={styles.acMainChord}>{this.keySet[2]}m7(b5)</Text>
                <Text style={styles.acMainChord}>{this.keySet[5]}m6</Text>
                <Text>*****</Text>
                <Text style={styles.acMainChord}>{this.keySet[10]}M7</Text>
                <Text style={styles.acMainChord}>{this.keySet[8]}M7</Text>
                <Text style={styles.acMainChord}>{this.keySet[1]}M7</Text>
            </View>
        );
    }

    render() {
        switch (this.props.label) {
            case 'Diatonic':
                return this.renderDiatonic();
            case 'Secondary':
                return this.renderSecondary();
            case 'Modal':
                return this.renderModal();
            default:
                return <Text>{getErrorMessage()}</Text>;
        }
    }
}
