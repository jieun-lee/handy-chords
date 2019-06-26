import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import {getPageNameFromLabel} from '../../Util';

export default class NavButtonRound extends Component {

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onClick(this.props.label)}
                underlayColor={colors.mediumShade}
                style={styles.roundNavButton}
            >
                <Text style={styles.roundNavText}>
                    {getPageNameFromLabel(this.props.label)}
                </Text>
            </TouchableHighlight>
        );
    }
}
