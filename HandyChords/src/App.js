import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './Stylesheet';
import {getErrorMessage} from './Util';
import NavPanel from './components/Navigation/NavPanel';
import NavBar from './components/Navigation/NavBar';
import ChordNotesPage from './pages/ChordNotesPage';
import QuickTransposePage from './pages/QuickTransposePage';
import AvailableChordPage from './pages/AvailableChordPage';
import ChordMemoPage from './pages/ChordMemoPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStartPage: false,
            currentPage: 'Available' // Chord, Transpose, Available, Memo
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
            let pageContent;
            switch(this.state.currentPage) {
                case 'Chord':
                    pageContent = <ChordNotesPage />;
                    break;
                case 'Transpose':
                    pageContent = <QuickTransposePage />;
                    break;
                case 'Available':
                    pageContent = <AvailableChordPage />;
                    break;
                case 'Memo':
                    pageContent = <ChordMemoPage />;
                    break;
                default:
                    pageContent = <Text>{getErrorMessage()}</Text>;
                    break;
            }
            return (
                <View style={styles.screenWrapper}>
                    {pageContent}
                    <NavBar onClick={this.setCurrentPage} selected={this.state.currentPage} />
                </View>
            )
        }
    }
}
