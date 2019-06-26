import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../../Stylesheet';
import ACSection from './ACSection';

export default class ACAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'Diatonic' // 'Diatonic', 'Secondary', 'Modal'
        }
    }

    setExpanded(label) {
        this.setState({
            expanded: label
        });
    }

    render() {
        let expanded = {
            'Diatonic': false,
            'Secondary': false,
            'Modal': false,
        }
        expanded[this.state.expanded] = true;

        return (
            <View style={styles.acWrapper}>
                <ACSection
                    label='Diatonic'
                    expanded={expanded['Diatonic']}
                    currentKey={this.props.currentKey}
                    setExpanded={this.setExpanded.bind(this)}
                />
                <ACSection
                    label='Secondary'
                    expanded={expanded['Secondary']}
                    currentKey={this.props.currentKey}
                    setExpanded={this.setExpanded.bind(this)}
                />
                <ACSection
                    label='Modal'
                    expanded={expanded['Modal']}
                    currentKey={this.props.currentKey}
                    setExpanded={this.setExpanded.bind(this)}
                />
            </View>
        );
    }
}
