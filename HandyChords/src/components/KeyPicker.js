import React, {Component} from 'react';
import CustomPicker from './CustomPicker';

export default class KeyPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: this.props.startValue
        }
    }

    render() {
        return (
            <CustomPicker
                startValue={this.props.startValue}
                handlePicker={this.props.handlePicker}
                pickerVals={['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#',
                    'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']}
            />
        );
    }
}
