import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles, {colors} from '../Stylesheet';
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
        const prevRows = this.state.songRows;
        const newRow = [];
        for (var i = 0; i < 4; i++) {
            // TODO: would taking this out cause reference errors?
            const blankMeasure = ['', '', '', ''];
            newRow.push(blankMeasure);
        }
        prevRows.push(newRow);
        this.setState({
            songRows: prevRows
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
                <View style={styles.centeringWrapper}>
                    <TouchableHighlight
                        onPress={() => this.addMeasure()}
                        underlayColor={colors.lightMediumShade}
                        style={styles.addRowButton}
                    >
                        <Text style={styles.addRowButtonText}>Add Row</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
