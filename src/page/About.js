import React, {Component} from 'react';
import{ 
    Text,
    View,
    Button
} from 'react-native';

export default class AboutScreen extends Component{
    render(){
        return(
            <View style={{textAlign: 'center', margin: 50, fontSize: 20}}>
            <Text> About </Text>
            <Button title='Home' onPress={
                () => this.props.navigation.navigate('Home')
                }/>
            <Text> 
                Login akun
            </Text>
            <Button title='Login' onPress={
                () => this.props.navigation.navigate('Login')
            } />
            </View>
        )
    }
};