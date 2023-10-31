import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import {images} from '../images'
import DotComponent from './DotComponent';

export default function CarouselItemComponent() {
  const width = Dimensions.get('window').width;

  const [currentImage, setCurrentImage] = React.useState(0)

  return (
    <View style={{alignItems: 'center', borderRadius: 15, position: 'relative'}}>
        <Carousel
            loop
            width={width - 20}
            height={width / 2}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setCurrentImage(index)}
            renderItem={({ index }) => (
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15
                    }}
                    source={{uri: images[index]}}
                >
                </Image>
            )}
        />
        <DotComponent currentImage={currentImage}/>
</View>
  )
}

const styles = StyleSheet.create({})