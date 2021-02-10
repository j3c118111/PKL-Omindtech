import React, { Component } from 'react'
import{
    SafeAreaView,
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,
    LogBox
} from 'react-native'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default class DetailListKaryawanScreen extends Component {
    render() {
        const{navigation} = this.props
        return (
            <SafeAreaView style = {styles.container}>
                <View style={{margin: 1, flex: 1 , flexDirection: 'column'}}>
                    <Image style={styles.logoContainer} source={{uri: navigation.getParam('foto')}} />
                    <FlatList
                        data={[
                            'Foto', navigation.getParam('foto'),
                            'Nama Toko', navigation.getParam('nama'),
                            'Alamat', navigation.getParam('riwayat_studi'),
                            'Jenis', navigation.getParam('jabatan'),
                        ]}
                        renderItem = {({item}) => (
                            <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
                                <Text></Text>
                                <Text style={{marginLeft: 10, marginRight: 10, fontSize: 16}}>{item}</Text>
                            </View>                        
                        )}
                        numColumns = {2}
                        keyExtractor = {(item, index) => index}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
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