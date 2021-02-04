import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class HomeScreen extends Component{
  state = {
    angka: 2,
    margin: 5
  };

  componentDidMount(){
    this.setState({angka: 89})
  }

  ubahAngka = () => {
    this.setState({angka: 24, margin: 80})
  }

  render(){
    return(
      <View style={{textAlign: 'center', margin: this.state.margin, fontSize: 20}}>
        <Text> Home </Text>
        <Text onPress={this.ubahAngka}>{this.state.angka}</Text>
        <Button title='Go to About' onPress={this.ubahAngka}/>
      </View>
    );
  }
}
