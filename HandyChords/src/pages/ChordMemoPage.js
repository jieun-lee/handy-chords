import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../Stylesheet';
import SongProps from '../components/Song/SongProps';
import SongRow from '../components/Song/SongRow';

export default class ChordMemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: 'Untitled',
            songKey: 'C',
            songTime: '4/4',
            songRows: [
                [['C', '', '', ''], ['F', '', '', ''], ['Dm', '', 'G7', ''], ['C', '', '', 'G/B']],
                [['Am', '', '', ''], ['Em', '', '', ''], ['F', '', 'G7', ''], ['C', '', '', '']],
            ]
        }
    }

    handlePropChange(type, oldVal, newVal) {
        // key vs time
        // old value
        // new value
        // give them dialog box, then what they want to do
    }

    addMeasure() {
        const newRow = [];
        for (var i = 0; i < 4; i++) {
            // TODO: would taking this out cause reference errors?
            const blankMeasure = ['', '', '', ''];
            blankRow.push(blankMeasure);
        }
        this.setState({
            songMeasures: songMeasures.push(newRow)
        });
    }

    renderSongRows() {
        let renderedRows = [];
        for (var i = 0; i < this.state.songRows.length; i++) {
            renderedRows.push(<SongRow key={i} rowNo={i} rowBars={this.state.songRows[i]} />)
        }
        return renderedRows;
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Text style={styles.sectionTitle}>Chord Memo</Text>
                <SongProps onChange={this.handlePropChange.bind(this)} />
                {this.renderSongRows()}
            </View>
        );
    }
}
