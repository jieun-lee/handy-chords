import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import ACExpanded from './ACExpanded';

export default class ACSection extends Component {
    getSectionNameFromLabel(label) {
        switch(label) {
            case 'Diatonic':
                return 'Diatonic Chords';
            case 'Secondary':
                return 'Secondary Dominant Chords';
            case 'Modal':
                return 'Modal Interchange Chords';
            default:
                return label;
        }
    }

    render() {
        return (
            <View style={styles.acWrapper}>
                <TouchableHighlight
                    onPress={() => this.props.toggleExpanded(this.props.label)}
                    underlayColor={colors.mediumShade}
                    style={styles.acBar}
                >
                    <Text style={styles.acBarText}>{this.getSectionNameFromLabel(this.props.label)}</Text>
                </TouchableHighlight>
                {this.props.expanded && <ACExpanded label={this.props.label} currentKey={this.props.currentKey} />}
            </View>
        );
    }
}
