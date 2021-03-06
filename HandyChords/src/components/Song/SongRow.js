import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import SongMeasure from './SongMeasure';

export default class SongRow extends Component {
    render() {
        return (
            <View style={styles.songRowContainer}>
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={0} barChords={this.props.rowBars[0]} />
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={1} barChords={this.props.rowBars[1]} />
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={2} barChords={this.props.rowBars[2]} />
                <View style={styles.songBarline} />
                <SongMeasure rowNo={this.props.rowNo} barNo={3} barChords={this.props.rowBars[3]} />
                <View style={styles.songBarline} />
            </View>
        );
    }
}
