import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../../Stylesheet';
import NavButtonRound from './NavButtonRound';

export default class NavPanel extends Component {
    render() {
        return (
            <View>
                <View style={styles.navPanelRow}>
                    <NavButtonRound label='Chord' onClick={this.props.onClick} />
                    <NavButtonRound label='Transpose' onClick={this.props.onClick} />
                </View>
                <View style={styles.navPanelRow}>
                    <NavButtonRound label='Available' onClick={this.props.onClick} />
                    <NavButtonRound label='Memo' onClick={this.props.onClick} />
                </View>
            </View>
        );
    }
}


