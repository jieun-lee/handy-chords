import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './Stylesheet';
import NavPanel from './components/Navigation/NavPanel';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStartPage: true,
            currentPage: '' // Chord, Transpose, Available, Memo
        }
        this.removeStartPage = this.removeStartPage.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    removeStartPage(label) {
        this.setState({
            isStartPage: false
        });
        this.setCurrentPage(label);
    }

    setCurrentPage(label) {
        this.setState({
            currentPage: label
        });
    }

    render() {
        if (this.state.isStartPage) {
            return (
                <View style={styles.mainBackground}>
                    <Text style={styles.mainTitle}>Handy Chords</Text>
                    <NavPanel onClick={this.removeStartPage} />
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
