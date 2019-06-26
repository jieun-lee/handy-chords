import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import {getPageNameFromLabel} from '../../Util';

export default class NavButton extends Component {
    render() {
        let buttonStyle = [styles.navButton];
        let textStyle = [styles.navText];

        if (this.props.roundButton) {
            buttonStyle.push(styles.navButtonRound);
            textStyle.push(styles.navTextRound);
        } else {
            buttonStyle.push(styles.navButtonFlat);
        }

        if (this.props.selected) {
            buttonStyle.push(styles.navButtonSelected);
        }

        return (
            <TouchableHighlight
                onPress={() => this.props.onClick(this.props.label)}
                underlayColor={colors.mediumShade}
                style={buttonStyle}
            >
                <Text style={textStyle}>
                    {getPageNameFromLabel(this.props.label)}
                </Text>
            </TouchableHighlight>
        );
    }
}
