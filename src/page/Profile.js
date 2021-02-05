import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';



const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22
    }
})
export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width: 66, height: 58}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />   
                <Image style={{margin: 50, width: 200, height: 40}} source={require('../../images/omind-tech.png')} />            
            </View>   
        )
    }
};