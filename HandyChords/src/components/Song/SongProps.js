import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles, {colors} from '../../Stylesheet';
import KeyPicker from '../KeyPicker';
import CustomPicker from '../CustomPicker';

export default class SongProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: '',
            songKey: 'C',
            songTime: '4/4',
            isExpanded: true
        }
    }

    setSongTitle(title) {
        this.setState({
            songTitle: title
        });
    }

    setSongKey(key) {
        // change key -> transpose chords vs leave them
        this.setState({
            songKey: key
        });
    }

    setSongTime(time) {
        // change time -> reset vs alter chord alignment (warning)
        this.setState({
            songTime: time
        });
    }

    toggleHeight() {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    // this.props.onChange(type, oldVal, newVal)

    render() {
        return (
            <View style={styles.songPropsContainer}>
                <View style={styles.songPropsHeader}>
                    <Text style={styles.songPropsHeaderText}>Song Properties</Text>
                    <TouchableHighlight
                        onPress={() => this.toggleHeight()}
                        underlayColor={colors.mediumShade}
                        style={styles.toggleButton}>
                            <Text>{this.state.isExpanded ? 'v' : '^'}</Text>
                    </TouchableHighlight>
                </View>
                {this.state.isExpanded &&
                    <View>
                        <View style={styles.songPropWrapper}>
                            <Text style={styles.songPropText}>Title: </Text>
                            <TextInput
                                style={styles.songTitlebox}
                                onChangeText={(text) => this.setSongTitle({text})}
                                value={this.state.songTitle}
                            />
                        </View>
                        <View style={styles.songPropWrapper}>
                            <Text style={styles.songPropText}>Key: </Text>
                            <KeyPicker
                                startValue={this.state.songKey}
                                handlePicker={this.setSongKey.bind(this)} />
                        </View>
                        <View style={styles.songPropWrapper}>
                            <Text style={styles.songPropText}>Time Signature: </Text>
                            <CustomPicker
                                startValue={this.state.songTime}
                                handlePicker={this.setSongTime.bind(this)}
                                pickerVals={['3/4', '4/4', '6/8']} />
                        </View>
                    </View>
                }
            </View>
        );
    }
}
