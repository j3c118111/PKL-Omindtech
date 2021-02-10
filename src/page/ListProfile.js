import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

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

export default class ListProfileScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[ 
                        {
                            nama: 'Kuple',
                            foto: 'https://i.pravatar.cc/300',
                            ttl: 'Lodaya, 29 Februari 1950',
                            umur: 70,
                            alamat: 'Jalan Cilibende',
                            no_telp: '082216348569'
                        },
                        {
                            nama: 'Kucle',
                            foto: 'https://i.pravatar.cc/300',
                            ttl: 'Malabar, 29 November 1980',
                            umur: 40,
                            alamat: 'Jalan Malabar',
                            no_telp: '082219992000'
                        },
                        {
                            nama: 'Kuproy',
                            foto: 'https://i.pravatar.cc/300',
                            ttl: 'Tegalgundil, 31 Desember 1999',
                            umur: 22,
                            alamat: 'Jalan Harapan Indah',
                            no_telp: '082218999981'
                        },
                        {
                            nama: 'Kumel',
                            foto: 'https://i.pravatar.cc/300',
                            ttl: 'Lodaya, 20 Maret 2000',
                            umur: 20,
                            alamat: 'Jalan Kenanga',
                            no_telp: '08221654321'
                        },
                        {
                            nama: 'Kucel',
                            foto: 'https://i.pravatar.cc/300',
                            ttl: 'Lodaya, 29 Oktober 1989',
                            umur: 31,
                            alamat: 'Jalan Daun',
                            no_telp: '082216906312'
                        }
                    ]}
                    renderItem={({item}) => <Text style={styles.item} onPress={()=>this.props.navigation.navigate('ListProfile', item)}>
                            {item.nama}</Text>}

                />
            </View>
        )
    }
};