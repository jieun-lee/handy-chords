import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../../Stylesheet';
import NavButtonRound from './NavButtonRound';

export default class NavPanel extends Component {
    render() {
        return (
            <View>
                <View style={styles.navPanelRow}>
                    <NavButtonRound label='Chord' />
                    <NavButtonRound label='Transpose' />
                </View>
                <View style={styles.navPanelRow}>
                    <NavButtonRound label='Available' />
                    <NavButtonRound label='Memo' />
                </View>
            </View>
        );
    }
}


