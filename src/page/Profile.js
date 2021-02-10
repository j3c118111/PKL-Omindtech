// import React, {Component} from 'react';
// import {
//     Text,
//     View,
//     Image,
//     StyleSheet
// } from 'react-native';



// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         paddingTop: 22,
//         backgroundColor: '#173F5F'
//     },
//     logoBack:{
//         flex: 1,
//         backgroundColor: 
//     }
// })
// export default class ProfileScreen extends Component{
//     render(){
//         return(
//             <View style={styles.container}>
//                 {/* <Image style={{width: 66, height: 58}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />    */}
//                 <Image style={{width: 210, height: 50, alignSelf: 'center'}} source={require('../../images/omind-tech.png')} />            
//             </View>   
//         )
//     }
// };
import React, { Component } from 'react';
import { SafeAreaView, 
         StyleSheet, 
         View, 
         FlatList, 
         Image, 
         Text } from 'react-native';

export default class ProfileScreen extends Component{
    

    // state = {
    //   dataSource: [],  
    // };

    // componentDidMount(){
    //     let items = Array.apply(null, Array(60)).map((v, i) => {
    //         return {
    //             id: i,
    //             src: 'http://placehold.it/200x200?text=' + (i + 1)
    //         };
    //     });
    //     this.setState({dataSource: items});
    // }

    render() {
        const {navigation} = this.props;
        return <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <Image style={styles.logoContainer} source={{uri: navigation.getParam('foto')}} />
                <FlatList
                data={[
                    
                    'Nama', navigation.getParam('nama'),
                    'Tempat Tanggal Lahir', navigation.getParam('ttl'),
                    'Umur', navigation.getParam('umur'),
                    'Alamat', navigation.getParam('alamat'),
                    'Telepon', navigation.getParam('no_telp'),
                    
                ]}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <Text></Text>
                        <Text style={{marginLeft: 10, marginRight: 10, fontSize: 16}}>{item}</Text>
                    </View>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
            </View>
        </SafeAreaView>
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#173F5F',
        color: '#fff'
    },
    logoContainer:{
        width: 100, 
        height: 100, 
        alignSelf: 'center', 
        margin: 40,
        // backgroundColor: '#ED553B',
        borderRadius: 25
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    
});