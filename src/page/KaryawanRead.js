import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    Platform,
    StyleSheet,
    Button,
    ActivityIndicator,
    FlatList,

} from 'react-native';

export default class KaryawanReadScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        };
    }
    static navigationOptions = { 
        title: "Daftar Karyawan"
    };
    componentDidMount(){
        return fetch("http://192.168.0.104/test_omind_project/ShowAllKaryawanList.php")
        .then((response) => response.text())
        .then(responseJson => {
            let ds = new FlatList.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState(
                {
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson)
                    
                },
                function(){

                }
            );
        })
        .catch(error=>{
            console.error(error);
        });
    }
    GetKaryawanIDFunction = (
        id,
        nama,
        alamat,
        tanggal_lahir
    ) => {
        this.props.navigation.navigate("KaryawanEdit",{
            id,
            nama,
            alamat,
            tanggal_lahir
        });
    };
    FlatListItemSeparator = () => {
        return(
            <View
            style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#000'
            }}
            />
        );
    };
    render(){
        if(this.state.isLoading){
            return(
                <View style={{
                    flex: 1,
                    paddingTop: 20,
                }}>
                <ActivityIndicator />
                </View>
            );
        }
        return(
            <View style={styles.MainContainer_For_Show_KaryawanList_Activity}>
                <FlatList
                dataSource={this.state.dataSource}
                renderSeparator={this.FlatListItemSeparator}
                renderRow={rowData=>(
                    <Text
                    style={styles.rowViewContainer}
                    onPress={this.GetKaryawanIDFunction.bind(
                        this,
                        rowData.id,
                        rowData.nama,
                        rowData.alamat,
                        rowData.tanggal_lahir
                    )}
                    >
                        {rowData.nama}
                    </Text>
                )}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
      alignItems: "center",
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#fff"
    },
  
    MainContainer_For_Show_KaryawanList_Activity: {
      flex: 1,
      paddingTop: Platform.OS == "ios" ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
    },
  
    TextInputStyleClass: {
      textAlign: "center",
      width: "90%",
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: "#30cb63",
      borderRadius: 5
    },
  
    TouchableOpacityStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: "90%",
      backgroundColor: "#30cb63"
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