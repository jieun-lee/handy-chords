import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import SongMeasure from './SongMeasure';

export default class SongRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }

    render() {
        return (
            <View style={styles.songRowContainer}>
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={1} />
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={2} />
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={3} />
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={4} />
                <View style={styles.songBarline} />
            </View>
        );
    }
}
