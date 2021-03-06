import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Stylesheet';
import KeyPicker from '../components/KeyPicker';
import CustomPicker from '../components/CustomPicker';
import {getKeySet, getChordIndex, tensionToIndex} from '../Util';

export default class ChordNotesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: 'C',
            additional: '',
            tension: '',
        }
    }

    updateChordNote(value) {
        this.setState({
            note: value
        });
    }

    updateChordAdditional(value) {
        this.setState({
            additional: value
        });
    }

    updateChordTension(value) {
        this.setState({
            tension: value
        });
    }

    getChordNotes() {
        const keySet = getKeySet(this.state.note);
        let noteIndices = getChordIndex(this.state.additional);
        let tensionIndex = tensionToIndex(this.state.tension);
        if (tensionIndex !== '') {
            noteIndices.push(tensionIndex);
        }
        let notes = '';
        for (let i=0; i < noteIndices.length; i++) {
            notes += keySet[noteIndices[i]] + ' ';
        }
        return notes;
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Chord Notes</Text>
                <View style={styles.chordPickerDropdownWrapper}>
                    {/* buttons instead of dropdowns? */}
                    <KeyPicker
                        startValue={this.state.note}
                        handlePicker={this.updateChordNote.bind(this)} />
                    <CustomPicker
                        startValue={this.state.additional}
                        handlePicker={this.updateChordAdditional.bind(this)}
                        pickerVals={['', 'm', 'aug', 'dim', '7', 'M7', 'm7', 'mM7', 'dim7', 'm7(b5)',
                        'add2', 'sus4', '6', 'm6']} />
                    <CustomPicker
                        startValue={this.state.tension}
                        handlePicker={this.updateChordTension.bind(this)}
                        pickerVals={['', 'b9', '9', '#9', 'b11', '11', '#11', 'b13', '13', '#13']} />
                </View>
                <Text style={styles.chordNotesText}>Chord: {this.state.note}{this.state.additional}
                {this.state.tension.length > 0 && '('+this.state.tension+')'}</Text>
                <Text style={styles.chordNotesText}>Notes: {this.getChordNotes()}</Text>
            </View>
        );
    }
}
