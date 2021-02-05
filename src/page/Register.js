import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet  
} from 'react-native';

// import Logo from './src/page/Logo';
// import Form from './src/page/Form';

// import {Actions} from 'react-native-router-flux';

export default class RegisterScreen extends Component{
    state = {
        nama: '',
        email: '',
        password: '',
        konfirmasiPassword: ''
    };
    submit = () => {
        let errors = [];
        if (this.state.nama === ''){
            errors.push("Nama harus diisi!");
        }
        if (this.state.email === ''){
            errors.push("Email harus diisi");
        }
        if (this.state.password === ''){
            errors.push("Password harus diisi");
        }
        if (this.state.konfirmasiPassword === ''){
            errors.push("Konfirmasi Password harus diisi!");
        }
        if (this.state.password !== this.state.konfirmasiPassword){
            errors.push("Konfirmasi Password tidak sesuai!");
        }
        let errors_msg = '';
        errors.map(val => {
            errors_msg += val + '\n';
        })
        // Menghitung banyak data yang ada di array errors
        if (errors.length > 0){
            Alert.alert(
                "Error",
                errors_msg,
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(val)=>{this.setState({nama: val})}}
                placeholder="Nama"
                placeholderTextColor="#fff"
                selectionColor="#fff"
                />
                <TextInput style={styles.inputBox}
                onChangeText={(val)=>{this.setState({email: val})}}
                placeholder="Email"
                placeholderTextColor="#fff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=>this.password.focus}
                />
                <TextInput style={styles.inputBox}
                onChangeText={(val)=>{this.setState({password: val})}}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#fff"
                ref={(input) => this.password = input}
                /> 
                <TextInput style={styles.inputBox}
                onChangeText={(val)=>{this.setState({konfirmasiPassword: val})}}
                placeholder="Konfirmasi Password"
                secureTextEntry={true}
                placeholderTextColor="#fff"
                ref={(input) => this.password = input}
                /> 

                <TouchableOpacity style = {styles.button} onPress={this.submit}>
                    <Text style = {styles.buttonText}>Register{this.props.type}</Text>
                </TouchableOpacity>


                
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        // marginTop: 50,
        padding: 20,
        backgroundColor: '#173F5F',
        color: '#ED553B',
        alignItems: 'center'
        
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    inputBox:{
        width:300,
        backgroundColor: '#3CAEA3',
        borderRadius: 25,
        paddingHorizontal: 16, 
        fontSize: 16,
        color: '#fff',
        marginVertical: 10
    },
    button:{
        width: 300,
        backgroundColor: "#F6D55C",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        // color: '#ED553B'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ED553B',
        textAlign: 'center'
    }
});