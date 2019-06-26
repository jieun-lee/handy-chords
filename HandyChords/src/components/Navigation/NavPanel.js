import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../../Stylesheet';
import NavButton from './NavButton';

export default class NavPanel extends Component {
    render() {
        return (
            <View>
                <View style={styles.navPanelRow}>
                    <NavButton roundButton label='Chord' onClick={this.props.onClick} />
                    <NavButton roundButton label='Transpose' onClick={this.props.onClick} />
                </View>
                <View style={styles.navPanelRow}>
                    <NavButton roundButton label='Available' onClick={this.props.onClick} />
                    <NavButton roundButton label='Memo' onClick={this.props.onClick} />
                </View>
            </View>
        );
    }
}


