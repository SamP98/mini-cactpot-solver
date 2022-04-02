import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import update from 'react-addons-update';

var initialState = [...Array(4)].map(e => Array(true, false, false, false));

export class Board extends Component {

  constructor(){
      super();
      this.state = {
        boardState: initialState
      }
  }
  
  render() {
    return(
        <>
            {this.renderGameBoard()}
        </>
    )
  }


  //toggles boolean for the button pressed
  buttonPress(row, id) {
      this.setState(update(this.state, {
          boardState: {
              [row]: {
                  [id]: {
                    $set: !this.state.boardState[row][id]
                  }
              }
          }
      }));
  }

  renderButton(rowid, id){
      return (
        <>
            <TouchableOpacity
                style={this.buttonStyle(rowid, id)}
                onPress={() => this.buttonPress(rowid, id)}
            ></TouchableOpacity>
        </>
      )
  }
  
  renderRow(id){
      return (
          <>
            <View style={styles.buttonRow}>
                {this.renderButton(id, 0)}
                {this.renderButton(id, 1)}
                {this.renderButton(id, 2)}
                {this.renderButton(id, 3)}
            </View>
          </>
      )
  }

  renderGameBoard(){
    return (
        <>
            <View>
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
                {this.renderRow(3)}
            </View>
        </>
    )
  }

  buttonStyle(rowid, id){
    if(this.state.boardState[rowid][id]){
        return [styles.gameButton, styles.gameButtonSelected];     
    }
    else{
        return [styles.gameButton, styles.gameButtonUnSelected];  
    }
  }

}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row'
    },
    gameButton: {
        padding: 20,
        borderWidth: 2,
        borderColor: "#000000"
    },
    gameButtonSelected: {
        backgroundColor: "#52ff33"
    },
    gameButtonUnSelected: {
        backgroundColor: "#ff0000"
    }
});