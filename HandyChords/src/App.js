import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './Stylesheet';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainBackground}>
        <Text style={styles.mainTitle}>Handy Chords</Text>
      </View>
    );
  }
}
