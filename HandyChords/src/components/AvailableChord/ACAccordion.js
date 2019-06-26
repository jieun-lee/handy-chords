import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../../Stylesheet';
import ACSection from './ACSection';

export default class ACAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expDiatonic: false,
            expSecondary: false,
            expModal: false
        }
    }

    toggleExpanded(label) {
        switch(label) {
            case 'Diatonic':
                this.setState({expDiatonic: !this.state.expDiatonic});
                break;
            case 'Secondary':
                this.setState({expSecondary: !this.state.expSecondary});
                break;
            case 'Modal':
                this.setState({expModal: !this.state.expModal});
                break;
        }
    }

    render() {
        return (
            <View style={styles.acWrapper}>
                <ACSection
                    label='Diatonic'
                    expanded={this.state.expDiatonic}
                    currentKey={this.props.currentKey}
                    toggleExpanded={this.toggleExpanded.bind(this)}
                />
                <ACSection
                    label='Secondary'
                    expanded={this.state.expSecondary}
                    currentKey={this.props.currentKey}
                    toggleExpanded={this.toggleExpanded.bind(this)}
                />
                <ACSection
                    label='Modal'
                    expanded={this.state.expModal}
                    currentKey={this.props.currentKey}
                    toggleExpanded={this.toggleExpanded.bind(this)}
                />
            </View>
        );
    }
}
