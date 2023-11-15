import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {images} from '../images'
import { Card, IconButton } from 'react-native-paper'

export default function CartPage() {

  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'black'}}>Keranjang</Text>
      <Text style={{fontSize: 12, marginBottom: 10, color: 'grey'}}>Berikut ini detail dari barang yang akan dibeli, silahkan lakukan pembayaran</Text>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {images.map((item, index) => (
                <Card contentStyle={{display: 'flex', flexDirection: 'row', padding: 5, columnGap: 5}} key={index}>
                    <Card.Cover source={{ uri: item }} style={styles.image}/>
                    <Card.Content style={{paddingTop: 5, width: '40%'}}>
                        <Text style={{fontWeight: '500', color: 'black', fontSize: 16}}>Sofa</Text>
                    </Card.Content>
                    <View style={{display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end'}}>
                        <IconButton icon={'minus'} size={14} background='black' style={{borderWidth: 1}}/>
                          <View style={{elevation: 0.8, shadowColor: 'grey', alignSelf: 'center'}}>
                            <Text style={{fontWeight: '500', color: 'black', fontSize: 16}}>1</Text>
                          </View>
                          <IconButton icon={'plus'} size={14} style={{borderWidth: 1}}/>
                    </View>
                </Card>
            ))}
            <View style={{backgroundColor: 'goldenrod', marginHorizontal: 10, padding: 10, borderRadius: 50}}>
              <Text style={{fontWeight: '500', color: 'white', fontSize: 16, textAlign: 'center'}}>Lakukan pembayaran</Text>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 5,
    padding: 10,
    flexDirection: 'column'
  },
  image: {
    width: 80,
    height: 80
  },
  card: {
    display: 'flex',
    flexDirection: 'row'
  },
  contentContainer: {
    rowGap: 10
  }
})