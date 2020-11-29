import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      buttonColor: "red",
    };
  }

  changeColor =()=>{
    var letters = '0123456789ABCDEF';
    var colors = '#';
    for(var i=0; i<6; i++){
      colors += letters[Math.floor(Math.random()*16)];
    }
    this.setState({buttonColor: colors})
  }

  incrementCounter =()=>{
    this.setState({counter: this.state.counter+1});
  }

  componentDidMount(){
    setInterval(this.incrementCounter,1000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          {this.state.counter}
        </Text>
        <Button title="change color" color={this.state.buttonColor} onPress={this.changeColor}></Button>
      </View>
    );
  }
}
