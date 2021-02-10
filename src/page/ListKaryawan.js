import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

export default class ListKaryawanScreen extends Component {
    static navigationOptions = { 
        title: "Daftar Karyawan"
    };
    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    data={[
                        {
                            foto: 'https://i.pravatar.cc/300',
                            nama: 'Kuple',
                            riwayat_studi: 'Magister',
                            jabatan: 'Manager'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            nama: 'Borne',
                            riwayat_studi: 'Sarjana',
                            jabatan:'Front-end Dev'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            nama: 'Bocilgede',
                            riwayat_studi: 'Sarjana',
                            jabatan:'Back-end Dev'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            nama: 'Miauwaug',
                            riwayat_studi: 'Sarjana',
                            jabatan:'Admin'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            nama: 'Dora',
                            riwayat_studi: 'Sarjana',
                            jabatan:'Vokasi'
                        },
                    ]}
                    renderItem={({item}) => <Text style={styles.item} onPress={()=>this.props.navigation.navigate('DetailListKaryawan', item)}>
                        {item.nama}
                    </Text> }
                    

                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
