import React, {Component} from 'react';
import {TouchableHighlight, Text, Alert} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import {getPageNameFromLabel} from '../../Util';

export default class NavButtonRound extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={()=>{Alert.alert(this.props.label)}}
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
