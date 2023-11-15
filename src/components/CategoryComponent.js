import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {IconButton} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

const furnitures = ['living room', 'kitchen', 'bedroom', 'study room']

export default function CategoryComponent() {
  return (
    <View style={{marginTop: 10, marginBottom: 5}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{columnGap: 10}}>
            {furnitures.map((item, index) => (
                <TouchableOpacity key={index} style={{
                    backgroundColor: 'white',
                    padding: 10,
                    width: 100,
                    height: 40,
                    borderRadius: 10,
                    
                }} activeOpacity={0.7}>
                  <Text style={{textAlign: 'center', color:'grey'}}>{item}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
})