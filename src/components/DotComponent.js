import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {images} from '../images'

export default function DotComponent({currentImage}) {
  return (
    <View style={styles.container}>
        {images.map((item, index) => {
            if(currentImage == index) {
               return <View style={[
                    styles.dot, {backgroundColor: 'teal'}
                ]} key={index}/>
            }
            return <View style={[
                styles.dot, {backgroundColor: 'grey'}
            ]} key={index}/>
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 5
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
    }
})