import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../../Stylesheet';
import NavButton from './NavButton';

export default class NavBar extends Component {
    render() {
        let selected = {
            'Chord': false,
            'Transpose': false,
            'Available': false,
            'Memo': false
        }
        selected[this.props.selected] = true;
        return (
            <View style={styles.navBar}>
                <NavButton label='Chord' onClick={this.props.onClick} selected={selected['Chord']} />
                <NavButton label='Transpose' onClick={this.props.onClick} selected={selected['Transpose']} />
                <NavButton label='Available' onClick={this.props.onClick} selected={selected['Available']} />
                <NavButton label='Memo' onClick={this.props.onClick} selected={selected['Memo']} />
            </View>
        );
    }
}
