import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import ads1 from '../images/ads1.png'
import ads2 from '../images/ads2.png'
import ads3 from '../images/ads3.png'
import { Card } from 'react-native-paper'

const DATA = [
    {
        id: 1,
        image: ads1
    },
    {
        id: 2,
        image: ads2
    },
    {
        id: 3,
        image: ads3
    },
    {
        id: 4,
        image: ads1
    },
]

export default function PromotionComponent() {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black'}}>Promo Minggu Ini</Text>
        <View style={styles.container}>
            {DATA.map((item, index) => (
            <Card key={index} style={styles.card}>
                <Card.Cover source={item.image} style={styles.image}/>
            </Card>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        columnGap: 10,
        rowGap: 10,
        justifyContent: 'center'
    },
    card: {
        width: '48%',
    },
    image: {
        resizeMode: 'contain'
    }
})