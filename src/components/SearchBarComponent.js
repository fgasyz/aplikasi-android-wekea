import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButton } from "react-native-paper"

export default function SearchBarComponent() {
  return (
    <View style={styles.container}>
        <View style={styles.textInput}>
          <Ionicons name='search' color={'grey'} size={22}/>
          <TextInput placeholder='masukkan kata kunci..' placeholderTextColor={'black'}/>
        </View>
          <IconButton icon='menu'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'grey',
        justifyContent: 'space-between',
    },
    textInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: '90%',
        borderRadius: 10,
        columnGap: 5,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
    },
})