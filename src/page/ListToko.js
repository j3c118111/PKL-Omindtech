import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

export default class ListTokoScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={[
                        {
                            foto: 'https://i.pravatar.cc/300',
                            namaToko: 'Toko Ganja Repal',
                            alamatToko: 'Jalan Gatotkaca',
                            jenisToko:'Sembako'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            namaToko: 'Toko Ekstasi Barud',
                            alamatToko: 'Jalan Harapan',
                            jenisToko:'Kelontong'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            namaToko: 'Toko Magic Mushroom Uni Marsa',
                            alamatToko: 'Jalan Bangbarung',
                            jenisToko:'Swalayan'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            namaToko: 'Lapo Vris Tampubolon',
                            alamatToko: 'Jalan Cibinong',
                            jenisToko:'Kelontong'
                        },
                        {
                            foto: 'https://i.pravatar.cc/300',
                            namaToko: 'Toko Rokok Herbal Priambudi',
                            alamatToko: 'Jalan Kenangan',
                            jenisToko:'Sembako'
                        },
                    ]}
                    renderItem={({item}) => <Text style={styles.item} onPress={()=>this.props.navigation.navigate('DetailListToko', item)}>
                        {item.namaToko}
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
