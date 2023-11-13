import { ScrollView, StyleSheet, View,  Text } from 'react-native'
import React from 'react'
import {Card, Button} from 'react-native-paper'
import {images} from '../images'

export default function ProductComponent() {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black'}}>Popular</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
            {images.map((item, index) => (
                <Card style={styles.card} key={index}>
                    <Card.Cover source={{ uri: item }} style={styles.image}/>
                    <Card.Content style={{paddingTop: 5}}>
                        <Text style={{fontWeight: '500', color: 'black'}}>Sofa</Text>
                        <Text style={{color: "black"}}>Rp. 10.000.000</Text>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
        columnGap: 10
    },
    card: {
        backgroundColor: 'white',
        width: 150
    },
    image: {
        height: 150
    }
})