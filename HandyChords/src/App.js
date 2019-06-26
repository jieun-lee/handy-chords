import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './Stylesheet';
import NavPanel from './components/Navigation/NavPanel';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStartPage: true
        }
    }

    _removeStartPage() {
        this.setState({
            isStartPage: false
        });
    }

    render() {
        if (this.state.isStartPage) {
            return (
                <View style={styles.mainBackground}>
                    <Text style={styles.mainTitle}>Handy Chords</Text>
                        <NavPanel />
                </View>
            )
        } else {
            return (
                <View style={styles.mainBackground}>
                    <Text style={styles.mainTitle}>Detailed Page</Text>
                </View>
            )
        }
    }
}
