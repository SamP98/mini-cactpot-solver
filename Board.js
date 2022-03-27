import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export class Board extends Component {
  render() {
    return(
        <>
            {this.renderGameBoard()}
        </>
    )
  }


  buttonPress() {
  }

  renderButton(){
      return (
        <>
            <TouchableOpacity
                style={styles.gameButton}
                onPress={this.buttonPress}
            ></TouchableOpacity>
        </>
      )
  }
  
  renderRow(){
      return (
          <>
            <View style={styles.buttonRow}>
                {this.renderButton()}
                {this.renderButton()}
                {this.renderButton()}
                {this.renderButton()}
            </View>
          </>
      )
  }

  renderGameBoard(){
    return (
        <>
            <View>
                {this.renderRow()}
                {this.renderRow()}
                {this.renderRow()}
                {this.renderRow()}
            </View>
        </>
    )
  }

}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row'
    },
    gameButton: {
        backgroundColor: "#52ff33",
        padding: 20,
        borderWidth: 2,
        borderColor: "#000000"
    }
});