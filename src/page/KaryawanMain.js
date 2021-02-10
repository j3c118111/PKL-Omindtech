import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Alert,
    Button,
    StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class KaryawanMainScreen extends Component{
    // state = { 
    //     nama: '',
    //     alamat: '',
    //     tanggal_lahir: ''
    // };

    

    constructor(props){
        super(props);
        this.state = {
            TextInput_Karyawan_Nama: '',
            TextInput_Karyawan_Alamat: '',
            date: ''
        };
    }
    submit = () => {
        let errors = [];
        if(this.state.TextInput_Karyawan_Nama === ''){
            errors.push("Nama harus diisi!");
        }
        if(this.state.TextInput_Karyawan_Alamat === ''){
            errors.push("Alamat harus diisi!");
        }
        if(this.state.date === ''){
            errors.push("Tanggal lahir harus diisi!");
        }
        let errors_msg = '';
        errors.map(val => {
            errors_msg += val + '\n';
        })
        if (errors.length > 0 ){
            Alert.alert(
                "Errors",
                errors_msg,
                [
                    {text: "OK", onPress: () => console.log("Ok")}
                ],
                {cancelable: false}
            );
        }
    }
    
    InsertKaryawanRecordsToServer = () => {
        fetch("http://192.168.1.37/test_omind_project/InsertKaryawanData.php",
        {
            method: "POST",
            headers: {
                'Accept': "application/json, text/plain",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nama: this.state.TextInput_Karyawan_Nama,
                alamat: this.state.TextInput_Karyawan_Alamat,
                tanggal_lahir: this.state.TextInput_Karyawan_TTL
        })    
    })
    .then((response) => response.text())
    .then(responseJson => {
       Alert.alert(responseJson); 
    })
    .catch(error => {
        console.error(error);
    });
};

    GoTo_Show_KaryawanList_Activity_Function = () => {
        this.props.navigation.navigate("KaryawanRead");
    };
       
    render(){
        return(
            <View style={styles.MainContainer}>
                <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7, color: '#fff'}}>
                    {""}
                    Pendaftaran Data Karyawan {""}
                </Text>
                <TextInput 
                placeholder="Data Nama"
                onChangeText={(TextInputValue) => {this.setState({TextInput_Karyawan_Nama: TextInputValue})
                }}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}/>

                <TextInput 
                placeholder="Alamat"
                onChangeText={(TextInputValue) => {this.setState({TextInput_Karyawan_Alamat: TextInputValue})
                }}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}/>

                {/* <TextInput 
                placeholder="Tanggal Lahir"
                onChangeText={(TextInputValue) => {this.setState({TextInput_Karyawan_TTL: TextInputValue})
                }}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}/> */}

                <DatePicker 
                    style={{width: '90%', borderRadius: 5, borderColor: '#3CAEA3'}}
                    date={this.state.date}
                    androidMode='spinner'
                    mode='date'
                    placeholder='Pilih tanggal'
                    format='YYYY-MM-DD'
                    // minDate=''
                    // maxDate=''
                    confirmBtnText='Confirm'
                    cancelBtnText='Cancel'
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                            
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange = {(date)=>{this.setState({date: date})}}

                />  
                <Text></Text>
                <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.TouchableOpacityStyle}
                    onPress={
                        () => {this.InsertKaryawanRecordsToServer(); 
                               this.submit();
                              }
                    }
                    // onPress={this.submit}
                >      
                    <Text style={styles.TextStyle}>
                        {" "}
                        Tambah Data Karyawan{""}
                    </Text>
                </TouchableOpacity>
                <Button title='Lihat Data Karyawan' onPress={()=>this.props.navigation.navigate('KaryawanRead')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
      alignItems: "center",
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#173F5F"
    },
  
    TextInputStyleClass: {
      textAlign: "center",
      width: "90%",
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: "#3CAEA3",
      color: '#fff',
      borderRadius: 5
    },
  
    TouchableOpacityStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: "90%",
      backgroundColor: "#3CAEA3"
    },
  
    TextStyle: {
      color: "#fff",
      textAlign: "center"
    },
  
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10
    }
  });
