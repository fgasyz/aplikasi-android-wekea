import { StyleSheet, View, Dimensions, Image, Animated, TouchableOpacity, Easing } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Carousel from 'react-native-reanimated-carousel'
import { Card, IconButton, Text } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import store from '../images/store.png'

export default function MapsPage() {
  const width = Dimensions.get('window').width;

  const mapRef = useRef(null) as any;
  const scrollCarouselRef = useRef(null) as any;
  const mapAnimation = new Animated.Value(0)
  const carouselAnimation = new Animated.Value(0)
  const carouselAnimationRef = useRef(carouselAnimation)
  const [isShowCarousel, setIsShowCarousel] = useState(true)

  const onPressMarker = (mapData: any) => {
    const markerId = mapData._targetInst.return.key;
    scrollCarouselRef.current?.scrollTo({index: +markerId, animated: true})
  }

  const region = {
    latitude:  37.78825,
    longitude:  -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,        
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

  const interpolation = markers.map((_, index: number) => {
    const inputRange  = [[index - 1] * width, index * width, [index + 1] * width]
    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp'
    })
    return {scale}
  })


  const carouselInterpolate = carouselAnimationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1000],
    extrapolate: 'clamp'
  })

  const onCarouselAnimation = () => {
    setIsShowCarousel((prev) => !prev)
    Animated.timing(carouselAnimationRef.current, {
      toValue: isShowCarousel ? 1 : 0,
      duration: 3000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView style={StyleSheet.absoluteFillObject} ref={mapRef} initialRegion={region} showsUserLocation={true}>
      {
        markers.map((marker, index) => {
          return <Marker key={index} coordinate={marker.coordinate} onPress={(e) => onPressMarker(e)}>
            <Animated.Image source={store} style={{width: 20, height: 20, transform:[
              {
                scale: interpolation[index].scale
              }
            ]}} />
          </Marker>
        })
      }
      </MapView>

      <View style={{alignSelf: 'flex-end'}}>
        <IconButton icon={() => <MaterialIcons name='location-on' size={20}/>} style={{backgroundColor: 'white'}}
          onPress={onCarouselAnimation}
        />
      </View>

      <View style={{position: 'absolute', top: 100, left: 50}} />
      <Animated.View style={{alignItems: 'center', borderRadius: 15, marginTop: 10, transform: [
        {
          translateY: carouselInterpolate
        }
      ]}}>
        <Carousel ref={scrollCarouselRef}
            loop
            width={width - 20}
            height={width }
            autoPlay={true}
            data={markers}
            scrollAnimationDuration={3000}
            onProgressChange={(progres) => {
              mapAnimation.setValue(Math.abs(progres))
            }}
            onSnapToItem={(index) => {
              const {coordinate} = markers[index]
              mapRef.current?.animateToRegion({
                ...coordinate,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta
              })
            }}
            renderItem={({ index }) => (
              <Card style={styles.card}>
                <Card.Cover source={{uri: markers[index].image}} style={styles.image}/>
                <Card.Content style={{marginTop: 10, marginBottom: 0}}>
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                      <Text variant="titleLarge" style={{fontWeight: '500'}}>{markers[index].title}</Text>
                      <Text variant="bodyMedium">{markers[index].address}</Text>
                    </View>
                    <IconButton icon={() => <MaterialIcons name='gps-fixed' size={24} color={'grey'}/>}/>
                  </View>
                </Card.Content>
              </Card>
            )}
        />
</Animated.View>
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