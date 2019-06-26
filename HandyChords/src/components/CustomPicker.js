import React, {Component} from 'react';
import {Picker} from 'react-native';
import styles from '../Stylesheet';

export default class CustomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.startValue
        }
    }

    render() {
        const values = this.props.pickerVals;
        let pickerItems = values.map((val) => <Picker.Item key={val} label={val} value={val} />);

        return (
            <Picker
                selectedValue={this.state.selected}
                style={styles.customPicker}
                onValueChange={(itemValue) => {
                    this.setState({selected: itemValue});
                    this.props.handlePicker(itemValue);
                }}
            >
                {pickerItems}
            </Picker>
        );
    }
}
