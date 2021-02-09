import React, {Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
// import { DefaultTransition } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

export default class TokoScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            TokoVariable:{ 
                TextInput_Toko_Nama: '',
                TextInput_Toko_Alamat: '',
                TextInput_Toko_Jenis: '',
            },
            JenisToko: ''

        };
    }
    submit = () => {
        let errors = [];
        if(this.state.TokoVariable.TextInput_Toko_Nama === ''){
            errors.push("Nama harus diisi!");
        }
        if(this.state.TokoVariable.TextInput_Toko_Alamat === ''){
            errors.push("Alamat harus diisi!");
        }
        if(this.state.TokoVariable.JenisToko === ''){
            errors.push("Jenis toko harus diisi!");
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
    render(){
        return(
            <View style={styles.MainContainer}>
                <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7, color: '#fff'}}>
                    {""}
                    Pendaftaran Toko{""}
                </Text>
                <TextInput 
                placeholder="Nama Toko"
                onChangeText={(TextInputValue) => {this.setState(
                    {...this.state, TokoVariable: {...this.state.TokoVariable, TextInput_Toko_Nama: TextInputValue}}
                    )
                }}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}/>

                <TextInput 
                placeholder='Alamat'
                onChangeText={(TextInputValue) => {this.setState(
                    {...this.state, TokoVariable: {...this.state.TokoVariable, TextInput_Toko_Alamat: TextInputValue}})
                }}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}/>

                {/* <TextInput 
                placeholder="Jenis Toko"
                onChangeText={(TextInputValue) => {this.setState({TextInput_Toko_Jenis: TextInputValue})
                }}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}/> */}

                <DropDownPicker
                    items={[
                        {label: 'Sembako', value: 'sbk'},
                        {label: 'Kelontong', value: 'klt'},
                        {label: 'Swalayan', value: 'swly'}
                    ]}
                    defaultValue={this.state.JenisToko}
                    containerStyle={{height:40, width: '90%'}}
                    placeholder='Pilih jenis toko'
                    underlineColorAndroid='transparent'
                    style={{backgroundColor: '#173F5F', borderColor:'#3CAEA3'}}
                    labelStyle={{
                        textAlign: 'center',
                        color: '#fff'
                    }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    
                    dropDownStyle={{backgroundColor: '#3CAEA3', color:'#fff'}}
                    onChangeItem={
                        (item)=>{
                            this.setState(
                                {JenisToko: item.value}                                
                            );

                        }
                    }
                />
                <Text/>
                <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.TouchableOpacityStyle}
                    onPress={
                        () => {this.submit();}
                    }
                >      
                    <Text style={styles.TextStyle}>
                        {" "}
                        Tambah Data Toko{""}
                    </Text>
                </TouchableOpacity>
                {/* <Button title='Lihat Data Toko' onPress={()=>this.props.navigation.navigate('')}/> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
      alignItems: "center",
      flex: 1,
      paddingTop: 30,
      color: "#FFF",
      backgroundColor: "#173F5F"
    },
  
    TextInputStyleClass: {
      textAlign: "center",
      width: "90%",
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      color: "#FFF",
      borderColor: "#3CAEA3",
      borderRadius: 5
    },
  
    TouchableOpacityStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      color: "#FFF",
      width: "90%",
      backgroundColor: "#3CAEA3"
    },
  
    TextStyle: {
      color: "#fff",
      textAlign: "center"
    },
  
    rowViewContainer: {
        color: "#fff",
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10
    }
  });
