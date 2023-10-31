import { StyleSheet, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import Carousel from 'react-native-reanimated-carousel'
import { Card, IconButton, Text } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function MapsPage() {
  const width = Dimensions.get('window').width;

  const [position, setPosition] = useState({});

  const goToPosition = (lattitude, longitude) => {
    setPosition({lattitude: lattitude, longitude: longitude})
    console.log(position)
  }

  const markers = [
    {
      coordinate: { latitude: 37.8025259, longitude: -122.4351431 },
      title: 'Wekea Drop Store',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: {
        latitude: 37.7896386,
        longitude: -122.421646,
      },
      title: 'Wekea Drop Store 2',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: { latitude: 37.7665248, longitude: -122.4161628 },
      title: 'Wekea Drop Store 3',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView style={StyleSheet.absoluteFillObject} initialRegion={{
            latitude: position.latitude ? position.lattitude : 37.78825,
            longitude: position.longitude ? position.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,        
      }} showsUserLocation={true}/>
      <View style={{position: 'absolute', top: 100, left: 50}} />
      <View style={{alignItems: 'center', borderRadius: 15, marginTop: 10}}>
        <Carousel
            loop
            width={width - 20}
            height={width }
            autoPlay={true}
            data={markers}
            scrollAnimationDuration={3000}
            onSnapToItem={(index) => console.log(index)}
            renderItem={({ index }) => (
              <Card style={styles.card}>
                <Card.Cover source={{uri: markers[index].image}} style={styles.image}/>
                <Card.Content style={{marginTop: 10}}>
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                      <Text variant="titleLarge" style={{fontWeight: '500'}}>{markers[index].title}</Text>
                      <Text variant="bodyMedium">{markers[index].address}</Text>
                    </View>
                    <IconButton icon={() => <MaterialIcons name='gps-fixed' size={24} color={'grey'}/>} onPress={() => goToPosition(markers[index].coordinate.latitude, markers[index].coordinate.longitude)}/>
                  </View>
                </Card.Content>
              </Card>
            )}
        />
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5
  },
  image: {
    height: 100
  }
})