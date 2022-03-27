import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export class Header extends Component {
  render() {
    return(
      <Text style={styles.headerText}>Wondrous Tails Solver</Text>
    )
  }
}

const styles = StyleSheet.create({
    headerText: {

    }
});