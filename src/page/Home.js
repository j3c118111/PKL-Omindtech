import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class HomeScreen extends Component{
  state = {
    angka: 2,
    margin: 50
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
        <Button title='Go to About' onPress={
            ()=>{this.props.navigation.navigate('About')}
            }/>   
        <Text> 
            Login akun
        </Text>
        <Button style={{marginTop: 5}} title='Login' onPress={
            () => this.props.navigation.navigate('Login')
        } />   

        <Button style={{marginTop: 5}} title='List' onPress={()=>this.props.navigation.navigate('List')} />
        
        <Button style={{marginTop: 5}} title='Profile' onPress={()=>this.props.navigation.navigate('Profile')} />
      </View>
      
    );
  }
}
